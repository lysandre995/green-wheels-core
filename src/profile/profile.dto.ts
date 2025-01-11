import Dto from "../dto";
import CarDto from "./car.dto";
import TravelPreferencesDto from "./travel-preferences.dto";
import { TravelTimeOptionEnum } from "./travel-time-option.enum";

export default interface ProfileDto extends Dto {
    userId: number;
    car: CarDto;
    availableSeats: number;
    preferences: TravelPreferencesDto;
    travelTime: TravelTimeOptionEnum;
}
