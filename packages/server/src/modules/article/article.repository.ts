import { EntityRepository, Repository } from 'typeorm';

import { ArticleEntity } from './article.entity';
import {
  ArticleCreateReqDto,
  ArticleCreateResDto,
  PaginationResDto,
} from './article.dto';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(ArticleEntity)
export class ArticleRespository extends Repository<ArticleEntity> {
  async query(): Promise<PaginationResDto<ArticleCreateResDto>> {
    const [items, count] = await this.findAndCount();

    return {
      items,
      count,
    };
  }

  async getById(id): Promise<ArticleCreateResDto> {
    const article = await this.findOne(id);
    if (!article) {
      throw new NotFoundException();
    }
    return article;
  }

  async createArticle(
    article: ArticleCreateReqDto,
  ): Promise<ArticleCreateResDto> {
    const newArticle = await this.create(article).save();
    return newArticle;
  }
}
