import { authenticated } from '$lib/handlers';

export const load = authenticated(() => ({ protectedData: 41 }));
