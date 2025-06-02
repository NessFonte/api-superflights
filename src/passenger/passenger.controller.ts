import { Body, Controller, Post } from '@nestjs/common';
import { PassengerDTO } from 'src/common/dto/passenger.dto';
import { PassengerService } from './passenger.service';

@Controller('api/v1/passenger')
export class PassengerController {
    constructor(private readonly passengerService: PassengerService) {}

    @Post()
    create(@Body() passengerDTO: PassengerDTO) {
        return this.passengerService.create(passengerDTO);
    }
}
