import Dto from "../dto";

export default interface UserDto extends Dto {
    username: string;
    name: string;
    email: string;
    telephone: string;
    password: string;
    community?: number;
    communityVerificationCode?: string;
}
