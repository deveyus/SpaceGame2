// Factory function returns a fully initialized object
import { ISpaceship, IBoundedValue, quality, fuelType, ammunition, IBerthing, IEngine, IWeapon, ILifeSupport, IPowerPlant, IStarbase, IBom, IBOMItem, BOMItem, Blueprint, Berthing_Blueprint, LifeSupport_Blueprint, Engine_Blueprint, Weapon_Blueprint, PowerPlant_Blueprint } from "./interfaces";
import { Result, Ok, Err } from "ts-results-es";
import { v4 as uuid } from "uuid";
import util from 'util';

function berthingFactory(name = `Berthing unit`, berthingMass = 10, berthingVolume = 10, quality: quality = 3, berthingMaxCapacity = 10, berthingMaxHitpoints = 10, berthingMaxDurability = 10, berthingMaxPowerConsumption = 10): Result<IBerthing, Error> {
    const berthing: Berthing_Blueprint = {
        metaInfo: {
            uuid: uuid(),
            name: name
        },
        coreStats: {
            mass: berthingMass,
            volume: berthingVolume,
            hitPoints: { current: berthingMaxHitpoints, max: berthingMaxHitpoints },
            durability: { current: berthingMaxDurability, max: berthingMaxDurability },
            powerConsumption: { current: berthingMaxPowerConsumption, max: berthingMaxPowerConsumption }
        },
        partProps: {
            capacity: { current: berthingMaxCapacity, max: berthingMaxCapacity },
            quality: quality
        },
        researchData: {},
        items: []
    }
    return Ok(berthing);
}

function lifeSupportFactory(lifeSupportMass = 50, name = 'living', lifeSupportVolume = 10, lifeSupportMaxHitpoints = 10, lifeSupportMaxPowerConsumption = 10, lifeSupportMaxDurability = 10, lifeSupportMaxEfficiency = 10): Result<ILifeSupport, Error> {
    const lifeSupport: LifeSupport_Blueprint = {
        metaInfo: {
            uuid: uuid(),
            name: name
        },
        coreStats: {
            mass: lifeSupportMass,
            volume: lifeSupportVolume,
            hitPoints: { current: lifeSupportMaxHitpoints, max: lifeSupportMaxHitpoints },
            durability: { current: lifeSupportMaxDurability, max: lifeSupportMaxDurability },
            powerConsumption: { current: lifeSupportMaxPowerConsumption, max: lifeSupportMaxPowerConsumption }
        },
        partProps: {
            efficiency: { current: lifeSupportMaxEfficiency, max: lifeSupportMaxEfficiency }
        },
        researchData: {},
        items: []
    }
    return Ok(lifeSupport)
}

function powerPlantFactory(name = `Zippyzaps`, powerPlantMass = 10, powerPlantVolume = 10, burnRateMax = 10, fuelTankMax = 10, hitPointsMax = 10, powerPlantMaxDurability = 10, powerPlantMaxPowerConsumption = 10, fuel: fuelType = 1): Result<IPowerPlant, Error> {
    // current burnrate will be a settable parameter.
    const powerPlant: PowerPlant_Blueprint = {
        metaInfo: {
            uuid: uuid(),
            name: name
        },
        coreStats: {
            mass: powerPlantMass,
            volume: powerPlantVolume,
            hitPoints: { current: hitPointsMax, max: hitPointsMax },
            durability: { current: powerPlantMaxDurability, max: powerPlantMaxDurability },
            powerConsumption: { current: powerPlantMaxPowerConsumption, max: powerPlantMaxPowerConsumption }
        },
        partProps: {
            fuel: fuel,
            burnRate: { current: burnRateMax, max: burnRateMax },
            fuelTank: { current: fuelTankMax, max: fuelTankMax }
        },
        researchData: {},
        items: []
    }
    return Ok(powerPlant)
}

function weaponFactory(name = "Banana Gun", weaponAmmunition: ammunition = 1, weaponMass = 10, weaponVolume = 10, weaponMaxPowerConsumption = 10, weaponDamage = 10, weaponFireRate = 10, weaponMaxDurability = 10, weaponMaxHitPoints = 10): Result<IWeapon, Error> {
    const weapon: Weapon_Blueprint = {
        metaInfo: {
            uuid: uuid(),
            name: name
        },
        coreStats: {
            mass: weaponMass,
            volume: weaponVolume,
            powerConsumption: { current: weaponMaxPowerConsumption, max: weaponMaxPowerConsumption },
            durability: { current: weaponMaxDurability, max: weaponMaxDurability },
            hitPoints: { current: weaponMaxHitPoints, max: weaponMaxHitPoints },
        },
        partProps: {
            fireRate: weaponFireRate,
            damage: weaponDamage,
            ammunition: weaponAmmunition,

        },
        researchData: {},
        items: []
    }
    return Ok(weapon)
}

function engineFactory(engineName = `fish`, engineMass = 500, engineVolume = 10, engineThrust = 10, engineMaxPowerConsumption = 10, engineMaxHitpoints = 10, engineMaxDurability = 10): Result<IEngine, Error> {
    const engine: Engine_Blueprint = {
        metaInfo: {
            uuid: uuid(),
            name: engineName
        },
        coreStats: {
            mass: engineMass,
            volume: engineVolume,
            hitPoints: { current: engineMaxHitpoints, max: engineMaxHitpoints },
            durability: { current: engineMaxDurability, max: engineMaxDurability },
            powerConsumption: { current: engineMaxPowerConsumption, max: engineMaxDurability },
        },
        partProps: {
            thrust: engineThrust
        },
        researchData: {},
        items: []
    }

    return Ok(engine)
}

function spaceshipFactory(name: string, engines: IEngine[], weapons: IWeapon[], berthing: IBerthing[], lifesupport: ILifeSupport, powerplants: IPowerPlant[], cargo = 10, armor = 10): Result<ISpaceship, Error> {
    const spaceShip: ISpaceship = {
        name: name,
        uuid: uuid(),
        engines: engines,
        weapons: weapons,
        cargo: cargo,
        berthing: berthing,
        armor: armor,
        lifeSupport: lifesupport,
        powerPlants: powerplants,
    }
    return Ok(spaceShip)
}

function spaceShipPrep(): ISpaceship {
    const berthing = [berthingFactory().unwrap()];
    const lifeSupport = lifeSupportFactory().unwrap();
    const power = [powerPlantFactory().unwrap()];
    const weapons = [weaponFactory().unwrap()];
    const engines = [engineFactory().unwrap()];
    const test = spaceshipFactory(`jump tiddy`, engines, weapons, berthing, lifeSupport, power);

    if (test.isErr()) {
        console.error(test.unwrapErr())
        process.exit(1);
    }
    return test.unwrap()
}

function starBaseFactory(name: string, weapons: IWeapon[], berthing: IBerthing[], lifesupport: ILifeSupport, powerplants: IPowerPlant[], cargo = 10, armor = 10): Result<IStarbase, Error> {
    const starBase: IStarbase = {
        name: name,
        uuid: uuid(),
        weapons: weapons,
        cargo: cargo,
        berthing: berthing,
        armor: armor,
        lifeSupport: lifesupport,
        powerPlants: powerplants,
    }

    return Ok(starBase)
}

function starBasePrep(): IStarbase {
    const berthing = [berthingFactory().unwrap()];
    const lifeSupport = lifeSupportFactory().unwrap();
    const power = [powerPlantFactory().unwrap()];
    const weapons = [weaponFactory().unwrap()];

    const test = starBaseFactory(`Fort Kickass`, weapons, berthing, lifeSupport, power)

    if (test.isErr()) {
        console.error(test.unwrapErr())
        process.exit(1);
    }
    return test.unwrap()
}

// function researchBlueprintBOM(bom: IBom): IBom {
//     const randomizedItems: IBOMItem[] = bom.items.map(item => {
//         const itemMin = item.quantity * 0.9
//         const itemMax = item.quantity * 1.1
//         item.quantity = Math.random() * (itemMax - itemMin) + itemMin

//         return item
//     })

//     return {
//         ...bom,
//         items: randomizedItems
//     }
// }
function isBoundedValue(value: any): value is IBoundedValue {
    return value && value.hasOwnProperty('current') && value.hasOwnProperty('max');
}

function randomizeStat(value: number, minMod?: number, maxMod?: number): number {
    const minStats = value * (minMod ?? 0.9)
    const maxStats = value * (maxMod ?? 1.1)
    return Math.random() * (maxStats - minStats) + minStats
}

function researchBlueprintPart(blueprint: Blueprint): Blueprint {

    // 1) Deal with Ammunition enum
    //      Enums are numbers at runtime, so we can't just check if it's a number
    // 2) Solve for bounded value
    for (let [key, value] of Object.entries(blueprint.partProps)) {
        if (key === 'ammunition') {
            continue;
        }

        let check = blueprint.partProps[key as keyof Blueprint['partProps']]
        if (isBoundedValue(check)) {
            (check as IBoundedValue).max = randomizeStat((check as IBoundedValue).max);
            blueprint.partProps[key as keyof Blueprint['partProps']] = check;
            continue;
        } else if (typeof check === 'number') {
            blueprint.partProps[key as keyof Blueprint['partProps']] = randomizeStat(check as number);
        }
    }
    
    for (const property in blueprint.coreStats) {

    }
    for (const property of blueprint.items) {

    }

    return blueprint
}

const test: IBom = {
    items: [
        { name: BOMItem.METAL_BEAMS, quantity: 37 },
        { name: BOMItem.ELECTRONICS, quantity: 15 }
    ]
}

//console.log(util.inspect(spaceShipPrep(), true, 10, true));
console.log(util.inspect(spaceShipPrep(), true, 10, true));
