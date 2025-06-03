import { IPassenger } from "./passenger.interface";

export interface IFlight extends Document {
    readonly pilot: string;
    readonly airplane: string;
    readonly originCity: string;
    readonly destinationCity: string;
    readonly flightDate: Date;
    passengers: IPassenger[];
}