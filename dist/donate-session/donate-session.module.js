"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonateSessionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const donate_session_resolver_1 = require("./donate-session.resolver");
const donate_session_service_1 = require("./donate-session.service");
const donate_session_entity_1 = require("./entities/donate-session.entity");
let DonateSessionModule = class DonateSessionModule {
};
DonateSessionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([donate_session_entity_1.DonateSession])],
        providers: [donate_session_resolver_1.DonateSessionResolver, donate_session_service_1.DonateSessionService],
    })
], DonateSessionModule);
exports.DonateSessionModule = DonateSessionModule;
//# sourceMappingURL=donate-session.module.js.map