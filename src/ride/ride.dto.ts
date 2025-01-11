import Dto from "../dto";

export default interface Location {
    lat: number;
    lng: number;
    nation: string;
    municipality: string;
}

export default interface RideDto extends Dto {
    driverId: number;
    start: Location;
    end: Location;
    dateTime: string;
    communityId?: number;
}
