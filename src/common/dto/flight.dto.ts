import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class FlightDTO {
    @IsNotEmpty()
    @IsString()
    readonly pilot: string;

    @IsNotEmpty()
    @IsString()
    readonly airplane: string;

    @IsNotEmpty()
    @IsString()
    readonly airline: string;

    @IsNotEmpty()
    @IsString()
    readonly origin_city: string;

    @IsNotEmpty()
    @IsString()
    readonly destination_city: string;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    readonly flight_date: Date;
}