import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { ArticleService } from './article.service';
import {
  ArticleCreateReqDto,
  ArticleCreateResDto,
  PaginationResDto,
} from './article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('list')
  async query(): Promise<PaginationResDto<ArticleCreateResDto>> {
    return this.articleService.query();
  }

  @Get(':id')
  async getById(@Param() idArticle): Promise<ArticleCreateResDto> {
    return this.articleService.getById(idArticle);
  }

  @Post('create')
  async create(
    @Body() article: ArticleCreateReqDto,
  ): Promise<ArticleCreateResDto> {
    return this.articleService.create(article);
  }
}
