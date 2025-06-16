// import { PartialType } from '@nestjs/mapped-types'; // Utilizar esse import caso não esteja usando o plugin do Swagger
import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
