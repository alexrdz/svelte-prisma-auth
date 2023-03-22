import { stripe } from '$lib/stripe';
import { error, json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import * as billing from '/$lib/services/billing';

// init api client
const stripe = new Stripe(env.SECRET_STRIPE_KEY);

// endpoint to handle incoming webhooks
export async function POST({ request }) {
  // extract body
  const body = await request.text();

  // get the signature from the header
  const signature = request.headers.get('stripe-signature');

  // var to hold event data
  let event;

  // verify it
  try {
    event = stripe.webhooks.constructEvent(body, signature, env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    // signature is invalid!
    console.warn('⚠️  Webhook signature verification failed.', err.message);

    // return, because it's a bad request
    throw error(400, 'Invalid request');
  }

  const { object } = event.data;

  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
    case 'customer.subscription.trial_will_end':
      await billing.syncSubscription(object.id);
      console.log(`Synced subscription ${object.id}`);
      break;
  }

  return json();
}
