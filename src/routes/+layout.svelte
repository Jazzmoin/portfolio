<script lang="ts">
	import './layout.css';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<div class="app">
	<header>
		<nav>
			<ul>
				<li>
					<a href={resolve('/')}>Home</a>
				</li>

				<li>
					<a href={resolve('/ux')}>UX</a>
				</li>

				<li>
					<a href={resolve('/coding')}>coding</a>
				</li>
			</ul>
		</nav>

	</header>

	<main>{@render children()}</main>
</div>

<style>
    header {
        display: flex;
        justify-content: space-between;
    }

    nav {
        display: flex;
        justify-content: center;
        --background: rgba(255, 255, 255, 0.7);
    }

    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background: var(--background);
        background-size: contain;
    }

    li {
        position: relative;
        height: 100%;
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        color: var(--color-text);
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }

    a:hover {
        color: var(--color-theme-1);
    }

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}


</style>
