import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { WeaponController } from './weapon/weapon.controller'
import { WeaponService } from './weapon/weapon.service'
import { PrismaService } from './prisma.service'

@Module({
	imports: [],
	controllers: [AppController, WeaponController],
	providers: [AppService, WeaponService, PrismaService]
})
export class AppModule {}
