import { Repository } from 'typeorm';
import { CreateDonateInput } from './dtos/create-donate.dto';
import { DonateSession } from './entities/donate-session.entity';
export declare class DonateSessionService {
    private readonly donations;
    constructor(donations: Repository<DonateSession>);
    createDonate({ title, description, coverImg, durationTime }: CreateDonateInput): Promise<{
        ok: boolean;
        error?: string;
    }>;
}
