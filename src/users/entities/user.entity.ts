import { User } from 'generated/prisma';

export class UserEntity implements User {
  id: number;
  name: string;
  email: string;
  admin: boolean;
  createdAt: Date;
}
