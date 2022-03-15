import { MutationOutput } from 'src/common/dtos/output.dto';
import { Notice } from '../entities/notice.entity';
declare const CreateNoticeInput_base: import("@nestjs/common").Type<Pick<Notice, "mainTitle" | "subTitle" | "description" | "image">>;
export declare class CreateNoticeInput extends CreateNoticeInput_base {
}
export declare class CreateNoticeOutput extends MutationOutput {
}
export {};
