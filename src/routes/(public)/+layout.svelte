<script>
	import { signIn } from '@auth/sveltekit/client';
</script>

<header class="flex p-8">
	Logo

	<nav class="ml-auto space-x-4">
		<a href="/">Home</a>
		<a href="/pricing">Pricing</a>
		<button on:click|preventDefault={() => signIn('github', { callbackUrl: '/dashboard' })}
			>Sign In</button
		>
	</nav>
</header>

<main>
	<slot />
</main>
