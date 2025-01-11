import Dto from "../dto";

export default interface CommunityDto extends Dto {
    name: string;
    address: string;
    verificationCode: string;
}
