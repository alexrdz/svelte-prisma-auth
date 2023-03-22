import { db } from '$lib/db';

export async function getBy(where) {
  return db.user.findUnique({ where });
}

export async function update(id, data) {
  return db.user.update({
    data,
    where: {
      id,
    },
  });
}
