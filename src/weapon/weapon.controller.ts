import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Redirect, Req } from '@nestjs/common'
import { WeaponDTO } from './weapon.dto'

@Controller('weapon')
export class WeaponController {
	@Get('list')
	findAll(): string {
		return 'weapon list'
	}

	@Get(':name')
	findOne(@Param('name') name: string): string {
		console.log(`${name}  is weapon`)
		return `${name} is weapon`
	}

	@Post()
	@Redirect('localhost:3000/weapon/list', 204)
	create(@Body() weaponDTO: WeaponDTO) {
		return 'new weapon'
	}

	@Patch()
	// FIXME : pk 빼고 옵셔널하게 타입 재설정
	update(@Body() weaponDTO: WeaponDTO) {
		return 'update Weapon'
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return 'remove weapon'
	}
}
