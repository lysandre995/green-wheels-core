import Dto from "../dto";

export default interface EvaluationDto extends Dto {
    driverId: number;
    token: string;
    done: boolean;
}
