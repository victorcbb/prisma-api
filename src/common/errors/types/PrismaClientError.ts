import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';

export type PrismaClientError = PrismaClientKnownRequestError & {
  meta?: {
    target?: string;
  };
};
