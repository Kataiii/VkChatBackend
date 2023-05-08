import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUnivercityDto } from './dto/create-univercity.dto';
import { Univercity } from './universities.model';

@Injectable()
export class UniversitiesService {
    constructor(@InjectModel(Univercity) private univercitiesRepository: typeof Univercity){}

    async getAllCities(){
        const univercities = await this.univercitiesRepository.findAll();
        return univercities;
    }

    async create(dto: CreateUnivercityDto){
        const univercity = await this.univercitiesRepository.create(dto);
        return univercity;
    }
}
