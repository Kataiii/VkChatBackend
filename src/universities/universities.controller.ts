import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUnivercityDto } from './dto/create-univercity.dto';
import { Univercity } from './universities.model';
import { UniversitiesService } from './universities.service';

@ApiTags('Universities')
@Controller('universities')
export class UniversitiesController {
    constructor(private univercitiesService : UniversitiesService){}

    @ApiOperation({summary: 'Create univercity'})
    @ApiResponse({ status: 200, type: Univercity})
    @Post()
    create(@Body() dto : CreateUnivercityDto){
        return this.univercitiesService.create(dto);
    }

    @ApiOperation({summary: 'Get all univercities'})
    @ApiResponse({status: 200, type: [Univercity]})
    @Get()
    getAll(){
        return this.univercitiesService.getAllCities();
    }
}
