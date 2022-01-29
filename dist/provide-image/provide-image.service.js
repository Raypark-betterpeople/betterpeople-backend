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
exports.ProvideImageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const image_container_1 = require("../image-container/entities/image-container");
const typeorm_2 = require("typeorm");
const provide_image_entity_1 = require("./entities/provide-image.entity");
const user_entity_1 = require("../users/entities/user.entity");
const jwt_service_1 = require("../jwt/jwt.service");
const donate_session_entity_1 = require("../donate-session/entities/donate-session.entity");
let ProvideImageService = class ProvideImageService {
    constructor(provideImage, donates, images, jwtService) {
        this.provideImage = provideImage;
        this.donates = donates;
        this.images = images;
        this.jwtService = jwtService;
    }
    async createProvideImage(providingUser, { donateId }) {
        try {
            const donateSession = await this.donates.findOne({ id: donateId });
            const donateImages = await this.images.find({ donate: donateSession });
            let randNum = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
            const imageURL = await donateImages[randNum].imageUrl;
            const donationTitle = await donateSession.title;
            const donateDurationTime = await donateSession.durationTime;
            const VerifyToken = await this.jwtService.signToken({
                check: 'copyright of the better people Inc.',
            });
            const newProvideImage = this.provideImage.create({
                token: VerifyToken,
                imageUrl: imageURL,
                donateSessionTitle: donationTitle,
                donateDurationDate: donateDurationTime,
            });
            newProvideImage.providingUser = providingUser;
            await this.provideImage.save(newProvideImage);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async findByToken(token) {
        return this.provideImage.findOne({ token }, { relations: ['providingUser'] });
    }
    async myImages(user) {
        console.log(user);
    }
};
ProvideImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(provide_image_entity_1.ProvideImage)),
    __param(1, (0, typeorm_1.InjectRepository)(donate_session_entity_1.DonateSession)),
    __param(2, (0, typeorm_1.InjectRepository)(image_container_1.ImageContainer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_service_1.JwtService])
], ProvideImageService);
exports.ProvideImageService = ProvideImageService;
//# sourceMappingURL=provide-image.service.js.map