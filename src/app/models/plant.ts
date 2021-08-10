export class Plant {
    plantId: number;
    startTime: Date;
    page: number;
    owner: string;
    constructor(plantId: number, startTime: Date, page: number, owner: string){
        this.plantId = plantId;
        this.startTime = startTime;
        this.page = page;
        this.owner = owner;
    }
}
