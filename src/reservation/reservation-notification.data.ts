export default interface ReservationNotificationData {
    userId: number;
    startLocation: string;
    endLocation: string;
    date: string;
    time: string;
    driverUsername: string;
    lng: number;
    lat: number;
}
