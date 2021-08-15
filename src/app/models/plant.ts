export class Plant {
    plant_id: number;
    page: number;
    owner_id: string;
    id: string;
    hour: number;
    minute: number;
    second: number;
    constructor(plant_id: number, page: number, owner_id: string, id: string, hour: number, minute: number, second: number){
        this.plant_id = plant_id;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.page = page;
        this.owner_id = owner_id;
        this.id = id;
    }
}
