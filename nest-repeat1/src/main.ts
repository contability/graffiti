import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { PrismaService } from './prisma.service'

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule)
	await app.listen(3000)

	const prismaService = app.get(PrismaService)
	await prismaService.enableShutdownHooks(app)
}
bootstrap()
