import { db } from '$lib/db';

await db.plan.create({
	data: {
		name: 'Basic',
		handle: 'basic',
		price: 1000,
		priceId: 'price_1MnWExFvStp6zZ76Br9hgCOX'
	}
});

await db.plan.create({
	data: {
		name: 'Enterprise',
		handle: 'enterprise',
		price: 10000,
		priceId: 'price_1MnWFrFvStp6zZ76GonGNSlU'
	}
});


