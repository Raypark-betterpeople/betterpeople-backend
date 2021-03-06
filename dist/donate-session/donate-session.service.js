"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonateSessionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const donate_session_entity_1 = require("./entities/donate-session.entity");
let DonateSessionService = class DonateSessionService {
    constructor(donations) {
        this.donations = donations;
    }
    async createDonate({ title, description, coverImg, durationTime, descriptionImg, }) {
        try {
            await this.donations.save(this.donations.create({ title, description, coverImg, durationTime, descriptionImg }));
            return { ok: true };
        }
        catch (error) {
            return {
                ok: false,
                error: '도네이션 섹션을 저장할 수 없습니다.'
            };
        }
    }
    async allDonate() {
        try {
            const donates = await this.donations.find();
            return {
                donates,
                ok: true,
            };
        }
        catch (error) {
            return {
                ok: false,
                error
            };
        }
    }
    async findDonateById({ donateId }) {
        try {
            const donate = await this.donations.findOne(donateId, {
                relations: ['donateImage']
            });
            if (!donate) {
                return {
                    ok: false,
                    error: '찾을 수 없는 기부 세션입니다.'
                };
            }
            return {
                ok: true,
                donate,
            };
        }
        catch (error) {
            return {
                ok: false,
                error: "찾을 수 없습니다."
            };
        }
    }
};
DonateSessionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(donate_session_entity_1.DonateSession)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DonateSessionService);
exports.DonateSessionService = DonateSessionService;
//# sourceMappingURL=donate-session.service.js.map