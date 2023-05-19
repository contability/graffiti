import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { Prisma, WEAPON } from '@prisma/client'

@Injectable()
export class WeaponService {
	constructor(private prisma: PrismaService) {}

	async weapon(weaponWhereUniqueInput: Prisma.WEAPONWhereUniqueInput): Promise<WEAPON | null> {
		return this.prisma.wEAPON.findUnique({
			where: weaponWhereUniqueInput
		})
	}

	async weapons(params: {
		skip?: number
		take?: number
		cursor?: Prisma.WEAPONWhereUniqueInput
		where?: Prisma.WEAPONWhereInput
		orderBy?: Prisma.WEAPONOrderByWithRelationInput
	}): Promise<WEAPON[]> {
		const { skip, take, cursor, where, orderBy } = params

		return this.prisma.wEAPON.findMany({
			skip,
			take,
			cursor,
			where,
			orderBy
		})
	}

	async createWeapon(params: { data: Prisma.WEAPONCreateInput }): Promise<WEAPON> {
		const { data } = params
		return this.prisma.wEAPON.create({
			data
		})
	}

	async updateWeapon(params: {
		where: Prisma.WEAPONWhereUniqueInput
		data: Prisma.WEAPONUpdateInput
	}): Promise<WEAPON> {
		const { where, data } = params

		return this.prisma.wEAPON.update({
			data,
			where
		})
	}

	async deleteWeapon(where: Prisma.WEAPONWhereUniqueInput): Promise<WEAPON> {
		return this.prisma.wEAPON.delete({
			where
		})
	}
}
