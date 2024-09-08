import { CarTypeEnum } from "./car-type.enum";
import { FuelTypeEnum } from "./fuel-type.enum";
import { TransmissionTypeEnum } from "./transmission-type.enum";

export default interface CarDto {
    type: CarTypeEnum,
    fuel: FuelTypeEnum,
    transmission: TransmissionTypeEnum,
    luxury: boolean,
    lowEmission: boolean,
    disabilityAccessVehicle: boolean
}
