import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUnivercityDto } from './dto/create-univercity.dto';
import { Univercity } from './universities.model';

@Injectable()
export class UniversitiesService {
    constructor(@InjectModel(Univercity) private cityRepository: typeof Univercity){}

    async getAllCities(){
        const cities = await this.cityRepository.findAll();
        return cities;
    }

    async create(dto: CreateUnivercityDto){
        const city = await this.cityRepository.create(dto);
        return city;
    }
}
