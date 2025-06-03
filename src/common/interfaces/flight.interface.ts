import { IPassenger } from "./passenger.interface";

export interface IFlight extends Document {
    readonly pilot: string;
    readonly airplane: string;
    readonly airline: string;
    readonly origin_city: string;
    readonly destination_city: string;
    readonly flight_date: Date;
    passengers: IPassenger[];
}