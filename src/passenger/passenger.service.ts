import { HttpStatus, Injectable } from '@nestjs/common';
import { PassengerDTO } from '../common/dto/passenger.dto';
import { IPassenger } from 'src/common/interfaces/passenger.interface';
import { InjectModel } from '@nestjs/mongoose';
import { PASSENGER } from 'src/common/models/models';
import { Model } from 'mongoose';

@Injectable()
export class PassengerService {
    constructor(@InjectModel(PASSENGER.name) private readonly model: Model<IPassenger>) { };

    async create(passengerDTO: PassengerDTO): Promise<IPassenger> {
        const newPassenger = new this.model(passengerDTO);
        return await newPassenger.save();
    }

    async findAll(): Promise<IPassenger[]> {
        return await this.model.find();
    }

    async findOne(id: string): Promise<IPassenger> {
        return await this.model.findById(id);
    }

    async update(id: string, passengerDTO: PassengerDTO): Promise<IPassenger> {
        return await this.model.findByIdAndUpdate(id, passengerDTO, { new: true });
    }

    async delete(id: string) {
        await this.model.findByIdAndDelete(id);
        return {
            status: HttpStatus.OK,
            message: 'Passenger Deleted'
        }
    }
}
