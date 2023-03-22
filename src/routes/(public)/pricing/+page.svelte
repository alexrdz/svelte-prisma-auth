<script>
  import { signIn } from '@auth/sveltekit/client';

  export let data;

  function choosePlan(plan) {
    // TODO
    signIn('github', { callbackUrl: `/checkout?plan=${plan.handle}` });
    // signIn('github', {
    //   callbackUrl: `/checkout?plan=${plan.handle}`,
    // });
  }
</script>

<h1>Pricing</h1>

<section class="flex space-x-24">
  {#each data.plans as plan}
    <article>
      <h2>{plan.name}</h2>

      <p>{(plan.price / 100).toLocaleString('en', { style: 'currency', currency: 'usd' })}</p>

      <button on:click|preventDefault={() => choosePlan(plan)}>Choose</button>
    </article>
  {/each}
</section>
