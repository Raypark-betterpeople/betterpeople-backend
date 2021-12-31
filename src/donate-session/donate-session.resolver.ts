import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DonateSessionService } from './donate-session.service';
import {
  CreateDonateInput,
  CreateDonateOutput,
} from './dtos/create-donate.dto';
import { DonateSession } from './entities/donate-session.entity';

@Resolver(() => DonateSession)
export class DonateSessionResolver {
  constructor(private readonly donateSessionService: DonateSessionService) {}
  @Mutation(() => CreateDonateOutput)
  async createDonate(
    @Args('input') createDonateInput: CreateDonateInput,
  ): Promise<CreateDonateOutput> {
    try {
      const { ok, error } = await this.donateSessionService.createDonate(
        createDonateInput,
      );
      if (error) {
        return {
          ok,
          error,
        };
      }
      return { ok };
    } catch (error) {
      return { ok: false, error: '도네이션 섹션을 만들 수 없습니다.' };
    }
  }
}
