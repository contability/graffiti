import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Redirect } from '@nestjs/common'
import { WeaponDTO } from './dto/weapon.dto'
import { WeaponService } from './weapon.service'

@Controller('weapon')
export class WeaponController {
	//* DI
	constructor(private weaponService: WeaponService) {}

	/** /weapon/list */
	@Get('list')
	findAll(): Array<WeaponDTO> {
		return this.weaponService.findAll()
	}

	/** /weapon/selectOne?name=example */
	@Get('selectOne')
	findOne(@Query('name') name: string): WeaponDTO {
		console.log(`${name}  is weapon`)
		return new WeaponDTO()
	}

	/** /weapon/regist, Body */
	@Post('regist')
	// @Redirect('localhost:3000/weapon/list', 204)
	create(@Body() weaponDTO: WeaponDTO) {
		return `new weapon is ${weaponDTO}`
	}

	/** /weapon/update, Body */
	@Patch('update')
	// @Redirect('localhost:3000/weapon/list')
	// FIXME : pk 제외하고 옵셔널하게 타입 재설정
	update(@Body() weaponDTO: WeaponDTO) {
		return `update Weapon from ${weaponDTO}`
	}

	/**
	 * like pathVariable.
	 * /weapon/remove/1
	 * */
	@Delete('remove/:id')
	remove(@Param('id') id: number) {
		return `remove ${id} weapon`
	}
}
