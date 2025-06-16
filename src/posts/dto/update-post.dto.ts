// import { PartialType } from '@nestjs/mapped-types'; // Utilizar esse import caso não esteja usando o plugin do Swagger
import { PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {}
