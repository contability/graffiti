import { Controller, Get, Post, Req } from '@nestjs/common';

@Controller('weapon')
export class WeaponController {
  @Post()
  create(): string{
        return 'new weapon';
    }

    @Get()
    findAll(): string {
        return 'weapon list';
    }
}
