import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('auth')
@ApiTags('Auth api')
export class AuthController {
  @Get('/login')
  @ApiOperation({
    summary: 'login',
    description: `
    asdf\n
    `,
  })
  async login() {
    return 'hello'
  }
}
