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
exports.UserResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
const create_account_dto_1 = require("./dtos/create-account.dto");
const edit_profile_dto_1 = require("./dtos/edit-profile.dto");
const login_dto_1 = require("./dtos/login.dto");
const user_profile_dto_1 = require("./dtos/user-profile.dto");
const verify_email_dto_1 = require("./dtos/verify-email.dto");
const user_entity_1 = require("./entities/user.entity");
const users_service_1 = require("./users.service");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async createAccount(createAccountInput) {
        try {
            const { ok, error } = await this.userService.createAccount(createAccountInput);
            if (error) {
                return {
                    ok,
                    error,
                };
            }
            return {
                ok,
            };
        }
        catch (error) {
            return {
                ok: false,
                error,
            };
        }
    }
    async Login(loginInput) {
        try {
            const { ok, error, token } = await this.userService.login(loginInput);
            return {
                ok,
                error,
                token,
            };
        }
        catch (error) {
            return {
                ok: false,
                error: '로그인 할 수 없습니다.',
            };
        }
    }
    me(context) {
        if (!context.user) {
            return;
        }
        else {
            return context.user;
        }
    }
    async userProfile(context, userProfileInput) {
        if (!context.user) {
            return;
        }
        else {
            try {
                const user = await this.userService.findById(userProfileInput.userId);
                console.log(user);
                if (!user) {
                    throw Error;
                }
                return {
                    ok: true,
                    user,
                };
            }
            catch (error) {
                return {
                    error: '유저를 찾을 수 없습니다.',
                    ok: false,
                };
            }
        }
    }
    async editProfile(context, editProfileInput) {
        if (!context.user) {
            return;
        }
        else {
            try {
                const user = context.user;
                await this.userService.editProfile(user['id'], editProfileInput);
                return {
                    ok: true,
                };
            }
            catch (error) {
                return {
                    ok: false,
                    error: '업데이트 할 수 없습니다.',
                };
            }
        }
    }
    verifyEmail(verifyEmailInput) {
        this.userService.verifyEmail(verifyEmailInput.code);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => create_account_dto_1.CreateAccountOutput),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_dto_1.CreateAccountInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createAccount", null);
__decorate([
    (0, graphql_1.Mutation)(() => login_dto_1.LoginOutput),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "Login", null);
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.User),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "me", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Query)(() => user_profile_dto_1.UserProfileOutput),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_profile_dto_1.UserProfileInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "userProfile", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Mutation)(() => edit_profile_dto_1.EditProfileOutput),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, edit_profile_dto_1.EditProfileInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "editProfile", null);
__decorate([
    (0, graphql_1.Mutation)(() => verify_email_dto_1.VerifyEmailOutput),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_email_dto_1.VerifyEmailInput]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "verifyEmail", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_entity_1.User),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=users.resolver.js.map