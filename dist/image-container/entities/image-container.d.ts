import { CoreEntity } from "src/common/entities/core.entity";
import { DonateSession } from "src/donate-session/entities/donate-session.entity";
export declare class ImageContainer extends CoreEntity {
    imageUrl: string;
    donate: DonateSession;
}
