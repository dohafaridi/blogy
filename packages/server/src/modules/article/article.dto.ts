import {
  IsString,
  IsDateString,
  IsArray,
  IsNumber,
  Min,
} from 'class-validator';

export class ArticleCreateReqDto {
  @IsString()
  slug: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  body: string;
}

export class ArticleCreateResDto extends ArticleCreateReqDto {
  @IsDateString()
  createdAt: string;

  @IsDateString()
  updatedAt: string;
}

export class PaginationResDto<T extends object> {
  @IsArray()
  items: T[] = [];

  @IsNumber()
  @Min(0)
  count: number = 0;
}
