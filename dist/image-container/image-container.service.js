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
exports.ImageContainerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const donate_session_entity_1 = require("../donate-session/entities/donate-session.entity");
const typeorm_2 = require("typeorm");
const image_container_1 = require("./entities/image-container");
let ImageContainerService = class ImageContainerService {
    constructor(images, donates) {
        this.images = images;
        this.donates = donates;
    }
    async createImage({ imageUrl, donateId }) {
        try {
            const donate = await this.donates.findOne({ id: donateId });
            if (donate) {
                const newImage = await this.images.create({ imageUrl: imageUrl });
                newImage.donate = donate;
                await this.images.save(newImage);
                return { ok: true };
            }
            return { ok: false, error: "존재하지 않는 기부 세션입니다." };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
};
ImageContainerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(image_container_1.ImageContainer)),
    __param(1, (0, typeorm_1.InjectRepository)(donate_session_entity_1.DonateSession)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ImageContainerService);
exports.ImageContainerService = ImageContainerService;
//# sourceMappingURL=image-container.service.js.map