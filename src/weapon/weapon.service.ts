import { Injectable } from '@nestjs/common'
import { IWeapon } from 'src/weapon/interfaces/weapon.interface'

@Injectable()
export class WeaponService {
	private readonly weapons: IWeapon[] = []

	create(weapon: IWeapon) {
		this.weapons.push(weapon)
	}

	findAll(): IWeapon[] {
		return this.weapons
	}
}
