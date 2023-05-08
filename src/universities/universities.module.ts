import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UniversitiesController } from './universities.controller';
import { Univercity } from './universities.model';
import { UniversitiesService } from './universities.service';

@Module({
  controllers: [UniversitiesController],
  providers: [UniversitiesService],
  imports: [
    SequelizeModule.forFeature([Univercity])
  ]
})
export class UniversitiesModule {}
