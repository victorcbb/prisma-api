import { DatabaseError } from '../types/databaseError';
import { PrismaClientError } from '../types/PrismaClientError';
import { UniqueConstraintError } from '../types/UniqueConstrainError';

enum PrismaErrors {
  UniqueConstraintFailed = 'P2002',
}

export const handleDatabaseErros = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErrors.UniqueConstraintFailed:
      return new UniqueConstraintError(e);

    default:
      return new DatabaseError(e.message);
  }
};
