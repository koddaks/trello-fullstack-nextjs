'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function deleteBoard(id: string) {
  await db.board.delete({
    where: {
      id,
    },
  });

  revalidatePath('/organization/org_2i0UC0ieagEeOa3g93gCP06u2lw');
}
