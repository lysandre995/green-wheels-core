import Dto from "../dto";

export default interface ClientMessageDto extends Dto {
    from: { id: number; username: string };
    to: { id: number; username: string };
    message: string;
    dateTime: string;
}
