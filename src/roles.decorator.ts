import { SetMetadata } from '@nestjs/common';
import { UserRole } from './roles/roles.enum';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);
