import { MutationOutput } from "src/common/dtos/output.dto";
import { Notice } from "../entities/notice.entity";
export declare class AllNoticeOutput extends MutationOutput {
    notices?: Notice[];
}
