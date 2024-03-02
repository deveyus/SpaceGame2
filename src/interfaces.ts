import { v4 as uuidv4 } from 'uuid';
interface ISpaceship {
    name: string;
    uuid: string;
    engines: IEngine[];
    berthing: IBerthing[];
    armor: number; // Zero armor is an unarmored ship
    weapons: IWeapon[]; // Array of zero length for unarmed ships
    cargo: number; // Zero cargo is a ship with zero cargospace, not an error.
    lifeSupport: ILifeSupport;
    powerPlant: IPowerPlant[];
}

interface IBoundedValue {
    current: number;
    max: number;
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

interface IEngine {
    uuid: string;
    name: string;
    mass: number;
    volume: number;
    thrust: number;
    powerConsumption: number;
}

interface IBerthing {
    uuid: string;
    mass: number;
    volume: number;
    quality: number;
    capacity: IBoundedValue;
    hitPoints: IBoundedValue;
    durability: IBoundedValue;
    powerConsumption: number;
}

interface IWeapon {
    name: string;
    uuid: string;
    mass: number;
    powerConsumption: number;
    ammunition: ammunition;
    damage: number;
    fireRate: number;
    durability: number;
    hitpoints: number;
}

interface ILifeSupport {
    uuid: string;
    name: string;
    mass: number;
    volume: number;
    powerConsumption: number;
    hitPoints: IBoundedValue;
    durability: IBoundedValue;
    efficiency: IBoundedValue;
}

interface IPowerPlant {
    name: string;
    uuid: string;
    fuel: fuelType;
    burnRate: IBoundedValue;
    fuelTank: IBoundedValue;
    hitpoints: IBoundedValue;
    durability: IBoundedValue;
}

export {ISpaceship, IBoundedValue, quality, fuelType, ammunition, IEngine, IBerthing, IWeapon, ILifeSupport, IPowerPlant}