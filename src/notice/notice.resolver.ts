import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
  CreateNoticeInput,
  CreateNoticeOutput,
} from './dtos/create-notice.dto';
import { Notice } from './entities/notice.entity';
import { NoticeService } from './notice.service';

@Resolver(() => Notice)
export class NoticeResolver {
  constructor(private readonly noticeService: NoticeService) {}

  @Mutation(() => CreateNoticeOutput)
  async createNotice(
    @Args('input') createNoticeInput: CreateNoticeInput,
  ): Promise<CreateNoticeOutput> {
      try {
          const {ok, error} = await this.noticeService.createNotice(createNoticeInput)
          if(error) {
              return {
                  ok,
                  error
              }
          }
          if(ok) {
              return {
                  ok,
                  error
              }
          }
      } catch (error) {
          return {
              ok: false,
              error
          }
      }
  }
}
