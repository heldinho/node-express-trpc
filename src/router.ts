import * as trpc from '@trpc/server';
import { z } from 'zod';

export default trpc
  .router()
  .query('getUsers', {
    output: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
      })
    ),
    resolve() {
      return [
        { id: 1, name: 'Helder Passos' },
        { id: 2, name: 'Mary Passos' },
      ];
    },
  })
  .query('getUser', {
    input: z.object({
      id: z.number(),
    }),
    resolve(request) {
      return {
        id: request.input.id,
        name: 'Helder Passos',
      };
    },
  });
