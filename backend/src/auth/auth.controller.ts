import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entities/auth.entity';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  async login(@Body() { email, password }: LoginDto) {
    return await this.authService.login(email, password);
  }

  @Post('register')
  @ApiOkResponse({ description: 'User registered successfully'})
  async register(@Body() { email, userName, firstName, lastName, password1, password2 }: RegisterDto) {
    return await this.authService.register(email, userName, firstName, lastName, password1, password2);
  }
}
