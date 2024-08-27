import Dto from "../dto";

export default interface UserDto extends Dto {
    nickname: string;
    name: string;
    email: string;
    telephone: string;
    password: string;
    community?: string;
}