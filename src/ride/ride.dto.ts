import Dto from "../dto";
enum RideState {
    Ready = "Ready",
    Started = "Started",
    Concluded = "Concluded"
}

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
    state: RideState;
}
