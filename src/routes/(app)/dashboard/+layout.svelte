<script>
	import { signOut } from '@auth/sveltekit/client';
	import { user } from '$lib/stores';
</script>

<header>
	<img src="/logo.svg" alt="" />

	<nav>
		<a href="/dashboard">Dashboard</a>
		<a href="/billing">Billing</a>
		<button on:click|preventDefault={signOut}>Sign Out</button>
	</nav>
</header>

<main>
	<slot />
</main>
