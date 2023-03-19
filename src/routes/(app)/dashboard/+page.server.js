import { authenticated } from '$lib/handlers';
// export async function load({ locals, request }) {
// const session = await locals.getSession();

// if (!session) {
// 	throw redirect(303, '/auth/signin');
// }

// 	return { protectedData: 41 };
// }

export const load = authenticated(() => ({ protectedData: 41 }));
