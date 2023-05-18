import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { WeaponController } from './weapon/weapon.controller'
import { WeaponService } from './weapon/weapon.service'

@Module({
	imports: [],
	controllers: [AppController, WeaponController],
	providers: [AppService, WeaponService]
})
@Module({
	controllers: [WeaponController],
	providers: [WeaponService]
})
export class AppModule {}
