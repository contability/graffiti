import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeaponController } from './weapon/weapon.controller';

@Module({
  imports: [],
  controllers: [AppController, WeaponController],
  providers: [AppService],
})
export class AppModule {}
