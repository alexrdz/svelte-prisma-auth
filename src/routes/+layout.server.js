export async function load({ locals }) {
  console.log('locals', locals);
	return {
		session: await locals.getSession()
	};
}
