<script>
	import { signIn } from '@auth/sveltekit/client';
</script>

<header>
	<img src="/logo.svg" alt="" />

	<nav>
		<a href="/">Home</a>
		<a href="/pricing">Pricing</a>
		<button on:click|preventDefault={() => signIn('github', {callbackUrl: '/dashboard'})}>Sign In</button>
	</nav>
</header>

<main>
	<slot />
</main>
