export class Plant {
    plant_id: number;
    start_time: string;
    page: number;
    owner_id: string;
    id: string;
    constructor(plant_id: number, start_time: string, page: number, owner_id: string, id: string){
        this.plant_id = plant_id;
        this.start_time = start_time;
        this.page = page;
        this.owner_id = owner_id;
        this.id = id;
    }
}
