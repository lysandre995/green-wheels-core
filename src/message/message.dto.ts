import Dto from "../dto";

export default interface MessageDto extends Dto {
    from: number;
    to: number;
    message: string;
    dateTime: string;
}
