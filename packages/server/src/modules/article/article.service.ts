import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ArticleRespository } from './article.repository';
import {
  ArticleCreateReqDto,
  ArticleCreateResDto,
  PaginationResDto,
} from './article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleRespository)
    private readonly articleRespository: ArticleRespository,
  ) {}

  async query(): Promise<PaginationResDto<ArticleCreateResDto>> {
    return this.articleRespository.query();
  }

  async getById(idArticle): Promise<ArticleCreateResDto> {
    return this.articleRespository.getById(idArticle);
  }

  async create(article: ArticleCreateReqDto): Promise<ArticleCreateResDto> {
    return this.articleRespository.createArticle(article);
  }
}
