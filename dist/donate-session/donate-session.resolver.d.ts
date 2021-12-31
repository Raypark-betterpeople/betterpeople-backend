import { DonateSessionService } from './donate-session.service';
import { CreateDonateInput, CreateDonateOutput } from './dtos/create-donate.dto';
export declare class DonateSessionResolver {
    private readonly donateSessionService;
    constructor(donateSessionService: DonateSessionService);
    createDonate(createDonateInput: CreateDonateInput): Promise<CreateDonateOutput>;
}
