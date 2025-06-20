import { Body, Controller, Post, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { PassengerDTO } from 'src/common/dto/passenger.dto';
import { PassengerService } from './passenger.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
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
    update(@Param('id') id: string, @Body() passengerDTO: PassengerDTO) {
        return this.passengerService.update(id, passengerDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.passengerService.delete(id);
    }
}
