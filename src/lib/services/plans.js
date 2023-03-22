import { db } from '$lib/db';

export function all() {
  return db.plan.findMany({
    orderBy: [{ price: 'asc' }],
  });
}

export function get(id) {
  return getBy({ id });
  // return db.plan.findUnique({
  //   where: { id },
  // });
}

export function getBy(where) {
  const plan = db.plan.findUnique({ where });
  return plan;
}
