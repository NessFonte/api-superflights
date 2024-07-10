import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightDTO } from './dto/flight.dto';
import { PassengerService } from '../passenger/passenger.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('flights')
@Controller('api/v1/flight')
export class FlightController {
    constructor(
        private readonly flightService: FlightService,
        private readonly passengerService: PassengerService
    ) { }

    @Post()
    create(@Body() flightDTO: FlightDTO) {
        return this.flightService.create(flightDTO);
    }

    @Get()
    findAll() {
        return this.flightService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.flightService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() flightDTO: FlightDTO) {
        return this.flightService.update(id, flightDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.flightService.delete(id);
    }

    @Post(':flightId/passenger/:passengerId')
    async addPassenger(@Param('flightId') flightId: string, @Param('passengerId') passengerId: string) {
        const passenger = await this.passengerService.findOne(passengerId);
        if (!passenger) throw new HttpException("Passenger not found", HttpStatus.NOT_FOUND);
        return this.flightService.addPassenger(flightId, passengerId);
    }
}
