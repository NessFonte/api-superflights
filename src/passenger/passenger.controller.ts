import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PassengerDTO } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('passengers')
@Controller('api/v1/passenger')
export class PassengerController {
    constructor(private readonly passengerService: PassengerService) {}
    
    @Post()
    create(@Body() passengerDTO: PassengerDTO) {
        return this.passengerService.create(passengerDTO);
    }

    @Get()
    findAll() {
        return this.passengerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.passengerService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() passangerDTO: PassengerDTO) {
        return this.passengerService.update(id, passangerDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.passengerService.delete(id);
    }
}
