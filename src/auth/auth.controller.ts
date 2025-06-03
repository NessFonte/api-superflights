import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/common/dto/user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('api/v1/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('sigin')
    async singIn(@Req() req) {
        return await this.authService.signIn(req.user);
    }

    @Post('singup')
    async singUp(@Body() userDTO: UserDTO) {
        return await this.authService.signUp(userDTO);
    }
}
