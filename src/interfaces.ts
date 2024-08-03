interface ISpaceship {
    name: string;
    uuid: string;
    engines: IEngine[];
    berthing: IBerthing[];
    armor: number; // Zero armor is an unarmored ship
    weapons: IWeapon[]; // Array of zero length for unarmed ships
    cargo: number; // Zero cargo is a ship with zero cargospace, not an error.
    lifeSupport: ILifeSupport;
    powerPlants: IPowerPlant[];
}

interface IStarbase {
    name: string;
    uuid: string;
    weapons: IWeapon[];
    cargo: number;
    berthing: IBerthing[];
    armor: number;
    lifeSupport: ILifeSupport;
    powerPlants: IPowerPlant[];
}

enum quality {
    BROKEN,
    DAMAGED,
    POOR,
    AVERAGE,
    GOOD,
    EXCELLENT,
    LUXURY
}

enum fuelType {
    HYDROGEN,
    RADIOISOTOPE,
    HYDROCARBON,
    SOLAR,
    COCAINE,
}

enum ammunition {
    KINETIC, //mass drivers
    LASER, //directed energy weapons
    PLASMA, //unifield particle weapons
    EXPLOSIVE, //chemical explosives and nuclear explosives
    ELECTRIC, //EMP and arc throwers
    INCENDIARY, //non-direct thermal damage
    ACID //chemical reactions causing corrosion
}

enum BOMItem {
    METAL_PLATES,
    ELECTRONICS,
    METAL_BEAMS, // Unmeltable by jet fuel
}

interface IBoundedValue {
    current: number;
    max: number;
}

interface ICoreStats {
    coreStats: {
        mass: number;
        volume: number;
        hitPoints: IBoundedValue;
        durability: IBoundedValue;
        powerConsumption: IBoundedValue;
    }
}

interface IEngine {
    partProps: {
        thrust: number;
    }
}

interface IBerthing {
    partProps: {
        quality: number;
        capacity: IBoundedValue;
    }
}

interface IWeapon {
    partProps: {
        ammunition: ammunition;
        damage: number;
        fireRate: number;
    }
}

interface ILifeSupport {
    partProps: {
        efficiency: IBoundedValue;
    }
}

interface IPowerPlant {
    partProps: {
        fuel: fuelType;
        burnRate: IBoundedValue;
        fuelTank: IBoundedValue;
    }
}

interface IResearchData {
    researchData: {};
}

interface IBOMItem {
    name: BOMItem;
    quantity: number;
}

interface IBom {
    items: IBOMItem[];
}

interface IMetaInfo {
    metaInfo: {
        uuid: string,
        name: string
    }
}

export type Engine_Blueprint = IMetaInfo & ICoreStats & IResearchData & IEngine & IBom;
export type Berthing_Blueprint = IMetaInfo & ICoreStats & IResearchData & IBerthing & IBom;
export type Weapon_Blueprint = IMetaInfo & ICoreStats & IResearchData & IWeapon & IBom;
export type LifeSupport_Blueprint = IMetaInfo & ICoreStats & IResearchData & ILifeSupport & IBom;
export type PowerPlant_Blueprint = IMetaInfo & ICoreStats & IResearchData & IPowerPlant & IBom;
export type Blueprint = Engine_Blueprint | Berthing_Blueprint | Weapon_Blueprint | LifeSupport_Blueprint | PowerPlant_Blueprint;
export { ISpaceship, IBoundedValue, quality, fuelType, ammunition, IEngine, IBerthing, IWeapon, ILifeSupport, IPowerPlant, IStarbase, IBom, IBOMItem, BOMItem }