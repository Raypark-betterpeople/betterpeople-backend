"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvideImageModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const donate_session_entity_1 = require("../donate-session/entities/donate-session.entity");
const image_container_1 = require("../image-container/entities/image-container");
const provide_image_entity_1 = require("./entities/provide-image.entity");
const provide_image_resolver_1 = require("./provide-image.resolver");
const provide_image_service_1 = require("./provide-image.service");
const providing_image_controller_1 = require("./providing-image.controller");
let ProvideImageModule = class ProvideImageModule {
};
ProvideImageModule = __decorate([
    (0, common_1.Module)({
        controllers: [providing_image_controller_1.PaymentsController],
        imports: [typeorm_1.TypeOrmModule.forFeature([provide_image_entity_1.ProvideImage, donate_session_entity_1.DonateSession, image_container_1.ImageContainer])],
        providers: [
            provide_image_resolver_1.ProvideImageResolver,
            provide_image_service_1.ProvideImageService,
        ],
    })
], ProvideImageModule);
exports.ProvideImageModule = ProvideImageModule;
//# sourceMappingURL=provide-image.module.js.map