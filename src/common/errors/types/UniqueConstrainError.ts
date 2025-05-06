import { ConflictError } from './ConflictError';
import { PrismaClientError } from './PrismaClientError';

export class UniqueConstraintError extends ConflictError {
  constructor(e: PrismaClientError) {
    if (e.meta?.target) {
      const uniqueField = e.meta.target;

      super(`A record with this ${uniqueField} already exists.`);
    }
  }
}
