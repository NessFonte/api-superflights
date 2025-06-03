import { IPassenger } from "./passenger.interface";

export interface IFlight extends Document {
    pilot: string;
    airplane: string;
    airline: string;
    origin_city: string;
    destination_city: string;
    flight_date: Date;
    passengers: IPassenger[];
}