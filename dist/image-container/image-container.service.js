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
const typeorm_2 = require("typeorm");
const image_container_1 = require("./entities/image-container");
let ImageContainerService = class ImageContainerService {
    constructor(images) {
        this.images = images;
    }
    async createImage({ diceNumber, imageUrl, }) {
        try {
            const existDiceNumber = await this.images.findOne({ diceNumber });
            if (existDiceNumber) {
                return {
                    ok: false,
                    error: '이미 같은 다이스넘버의 이미지가 존재합니다.',
                };
            }
            await this.images.save(this.images.create({ diceNumber, imageUrl }));
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: '이미지를 저장할 수 없습니다.' };
        }
    }
};
ImageContainerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(image_container_1.ImageContainer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ImageContainerService);
exports.ImageContainerService = ImageContainerService;
//# sourceMappingURL=image-container.service.js.map