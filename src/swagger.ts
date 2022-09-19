import { INestApplication } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

export default function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Nest Community')
    .setDescription('Nest Community API Document')
    .setVersion('1.0')
    .addTag('NestCommunity')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api-docs', app, document)
}
