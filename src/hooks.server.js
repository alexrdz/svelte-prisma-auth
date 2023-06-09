import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { env } from '$env/dynamic/private';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from '$lib/db';
import { redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const protectedPaths = ['/dashboard', '/account'];
async function protect({ event, resolve }) {
	if (!protectedPaths.includes(event.url.pathname)) return resolve(event);

	const session = await event.locals.getSession();

	if (!session?.user) throw redirect(303, '/auth/signin');

	return resolve(event);
}

const authenticate = SvelteKitAuth({
	session: {
		// temporary workaround
		generateSessionToken() {
			return crypto.randomUUID();
		}
	},
	adapter: PrismaAdapter(db),
	providers: [
		GitHub({
			clientId: env.GITHUB_ID,
			clientSecret: env.GITHUB_SECRET
		})
	],
	secret: env.APP_SECRET
});

 export const handle = sequence(authenticate, protect);
