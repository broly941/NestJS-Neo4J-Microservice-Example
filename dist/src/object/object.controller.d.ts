import { ObjectService } from './object.service';
export declare class ObjectController {
    private readonly objectService;
    constructor(objectService: ObjectService);
    getAllObjects(): Promise<any[]>;
}
