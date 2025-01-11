import Dto from "../dto";

export default interface ReservationDto extends Dto {
    rideId: number;
    userId: number;
    accepted: boolean;
}
