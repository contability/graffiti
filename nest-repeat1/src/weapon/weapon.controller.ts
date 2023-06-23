import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { WeaponService } from './weapon.service'
import { WEAPON as WeaponModel } from '@prisma/client'

@Controller('weapon')
export class WeaponController {
	//* DI
	constructor(private readonly weaponService: WeaponService) {}

	@Post('regist-weapon')
	async postWeapon(@Body() postData: Omit<WeaponModel, 'id'>): Promise<WeaponModel> {
		return this.weaponService.createWeapon({
			data: postData
		})
	}

	/** selectOne. /weapon/weapon/:id. */
	@Get('/:id')
	async getWeaponById(@Param('id') id: number): Promise<WeaponModel | null> {
		// @Param is like pathVariable.
		return this.weaponService.weapon({ id: Number(id) })
	}

	/** selectList searchKeyword. /weapon/filtered-weapons/:searchString */
	@Get('filtered-weapons/:searchString')
	async getFilteredWeapons(@Param('searchString') searchString: string): Promise<WeaponModel[]> {
		return this.weaponService.weapons({
			where: {
				OR: [
					{
						name: { contains: searchString }
					},
					{
						description: { contains: searchString }
					}
				]
			}
		})
	}

	@Get('isportable-weapons/:isPortable')
	async getIsportableWeapons(@Param('isPortable') isPortable: string): Promise<WeaponModel[]> {
		return this.weaponService.weapons({
			where: {
				isportable: JSON.parse(isPortable)
			}
		})
	}

	/** update. /weapon/modify/:id */
	@Put('modify/:id')
	async updateWeapon(
		@Param('id') id: number,
		@Body() weaponData: { name: string; isportable: boolean; description: string }
	): Promise<WeaponModel> {
		const { name, isportable, description } = weaponData

		return this.weaponService.updateWeapon({
			data: { name, isportable, description },
			where: { id }
		})
	}

	/** delete. /weapon/remove?id=1 */
	@Delete('remove')
	async deleteWeapon(@Query('id') id: number): Promise<WeaponModel> {
		// @Query is query string.
		return this.weaponService.deleteWeapon({ id: Number(id) })
	}
}
