import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateUserSchema = z.object({
  name: z.string({ error: 'Name is required' }),
  password: z.string({ error: 'Password is required' }),
  username: z.string({ error: 'Username is required' }),
  email: z.email(),
});

export class CreateUserSchemaDTO extends createZodDto(CreateUserSchema) {}

export const CreateUserResponseSchemaDTO = CreateUserSchema.omit({
  password: true,
});

export type CreateUserResponseSchemaDTO = z.infer<
  typeof CreateUserResponseSchemaDTO
>;
