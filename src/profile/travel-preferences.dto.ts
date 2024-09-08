import { BreakFrequencyEnum } from "./break-frequency.enum";
import { DrivingSpeedOptionEnum } from "./driving-speed-option.enum";
import { LuggageSpaceOptionEnum } from "./luggage-spece-option.enum";
import { MusicOptionEnum } from "./music-option.enum";
import { TemperatureOptionEnum } from "./temperature-option.enum";

export default interface TravelPreferencesDto {
    smokeOnBoard: boolean;
    conversation: boolean;
    music: boolean;
    musicPreference: MusicOptionEnum;
    pets: boolean;
    temperature: TemperatureOptionEnum;
    breaks: BreakFrequencyEnum;
    speed: DrivingSpeedOptionEnum;
    luggage: LuggageSpaceOptionEnum;
}
