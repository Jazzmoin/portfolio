import {
    PublicClientApplication,
    type AccountInfo,
    type RedirectRequest,
    type PopupRequest,
    type SilentRequest,
} from "@azure/msal-browser";
import { browser } from "$app/environment";

const msalConfig = {
    auth: {
        clientId: import.meta.env.VITE_MS_CLIENT_ID as string,
        authority: "https://login.microsoftonline.com/common",
        redirectUri: import.meta.env.VITE_MS_REDIRECT_URI as string,
    },
    cache: {
        cacheLocation: "localStorage" as const,
        storeAuthStateInCookie: false,
    },
};

export const msalInstance = new PublicClientApplication(msalConfig);

let _initPromise: Promise<void> | null = null;

async function ensureInitialized(): Promise<void> {
    if (!browser) return;

    if (!_initPromise) {
        _initPromise = (async () => {
            await msalInstance.initialize();
        })();
    }

    return _initPromise;
}

const loginRequest: PopupRequest | RedirectRequest = {
    scopes: ["User.Read", "Tasks.Read"],
};

export async function loginPopup(): Promise<AccountInfo> {
    await ensureInitialized();
    const result = await msalInstance.loginPopup(loginRequest as PopupRequest);
    if (!result.account) throw new Error("No account returned from loginPopup");
    return result.account;
}

export async function logout(): Promise<void> {
    await ensureInitialized();
    await msalInstance.clearCache();
}

export async function getAccessToken(): Promise<string> {
    await ensureInitialized();

    const accounts = msalInstance.getAllAccounts();
    const account = accounts[0];
    if (!account) throw new Error("No account logged in");

    const silentRequest: SilentRequest = {
        scopes: ["User.Read", "Tasks.Read"],
        account,
    };

    try {
        const resp = await msalInstance.acquireTokenSilent(silentRequest);
        return resp.accessToken;
    } catch (_err) {
        const interactiveResp =
            await msalInstance.acquireTokenPopup(silentRequest);
        return interactiveResp.accessToken;
    }
}

export async function getSignedInAccount(): Promise<AccountInfo | null> {
    await ensureInitialized();
    const active = msalInstance.getActiveAccount();
    if (active) return active;

    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
        msalInstance.setActiveAccount(accounts[0]);
        return accounts[0];
    }
    return null;
}

export async function isSignedIn(): Promise<boolean> {
    return (await getSignedInAccount()) !== null;
}
