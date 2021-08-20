export class AxieCard {
    aquatic_only: boolean;
    chain_only: boolean;
    class_type: string;
    combo_bonus: boolean;
    defaultAttack: number;
    defaultDefense: number;
    defaultEnergy: number;
    description: string;
    expectType: string;
    filter_id: string;
    iconId: string;
    id: string;
    part: string;
    partName: string;
    plant_only: boolean;
    skillName: string;
    triggerColor: string;
    triggerText: string;
    
    constructor(aquatic_only: boolean,chain_only: boolean, class_type: string, combo_bonus: boolean,defaultAttack: number,defaultDefense: number,defaultEnergy: number,description: string,expectType: string,filter_id: string,iconId: string,id: string,part: string,partName: string,plant_only: boolean,skillName: string,triggerColor: string,triggerText: string) {
        this.aquatic_only = aquatic_only;
        this.chain_only = chain_only;
        this.class_type = class_type;
        this.combo_bonus= combo_bonus;
        this.defaultAttack= defaultAttack;
        this.defaultDefense= defaultDefense;
        this.defaultEnergy= defaultEnergy;
        this.description= description;
        this.expectType= expectType;
        this.filter_id= filter_id;
        this.iconId= iconId;
        this.id= id;
        this.part= part;
        this.partName= partName;
        this.plant_only= plant_only;
        this.skillName= skillName;
        this.triggerColor= triggerColor;
        this.triggerText= triggerText;
    }
}

export class AxieType {
    type_id: string;
    label: string;
    value: string;
    constructor(type_id: string, label: string, value: string){
        this.type_id = type_id;
        this.label = label;
        this.value = value;
    }
}

export class Axie {
    axie_type: AxieType;
    horn: AxieCard;
    mouth: AxieCard;
    back: AxieCard;
    tail: AxieCard;
    constructor(axie_type: AxieType, horn: AxieCard, mouth: AxieCard, back: AxieCard, tail: AxieCard){
        this.axie_type = axie_type;
        this.horn = horn;
        this.mouth = mouth;
        this.back = back;
        this.tail = tail;
    }
}

export class AxieTeam {
    name: string;
    owner: string;
    team: Axie[];
    constructor(name: string, owner: string, team: Axie[]){
        this.name = name;
        this.owner = owner;
        this.team = team;
    }
}