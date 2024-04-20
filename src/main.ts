// Factory function returns a fully initialized object
import { ISpaceship, IBoundedValue, quality, fuelType, ammunition, IEngine, IBerthing, IWeapon, ILifeSupport, IPowerPlant, IStarbase } from "./interfaces";
import { Result, Ok, Err } from "ts-results-es";
import { v4 as uuid } from "uuid";
import util from 'util';

function berthingFactory(name = `Berthing unit`, berthingMass = 10, berthingVolume = 10, quality: quality = 3, berthingMaxCapacity = 10, berthingMaxHitpoints = 10, berthingMaxDurability = 10, berthingMaxPowerConsumption = 10): Result<IBerthing, Error> {
    const berthing: IBerthing = {
        uuid: uuid(),
        name: name,
        mass: berthingMass,
        volume: berthingVolume,
        quality: quality,
        capacity: { current: berthingMaxCapacity, max: berthingMaxCapacity },
        hitPoints: { current: berthingMaxHitpoints, max: berthingMaxHitpoints },
        durability: { current: berthingMaxDurability, max: berthingMaxDurability },
        powerConsumption: berthingMaxPowerConsumption,
    }
    return Ok(berthing);
}

function lifeSupportFactory(lifeSupportMass = 50, name = 'living', lifeSupportMaxPowerConsumption = 10, lifeSupportMaxDurability = 10, lifeSupportMaxEfficiency = 10): Result<ILifeSupport, Error> {
    const lifeSupport: ILifeSupport = {
        uuid: uuid(),
        name: name,
        mass: lifeSupportMass,
        volume: lifeSupportMass,
        powerConsumption: lifeSupportMass,
        hitPoints: { current: lifeSupportMaxPowerConsumption, max: lifeSupportMaxPowerConsumption },
        durability: { current: lifeSupportMaxDurability, max: lifeSupportMaxDurability },
        efficiency: { current: lifeSupportMaxEfficiency, max: lifeSupportMaxEfficiency },

    }
    return Ok(lifeSupport)
}

function powerPlantFactory(name = `Zippyzaps`, burnRateMax = 10, fuelTankMax = 10, hitPointsMax = 10, durabilityMax = 10, fuel: fuelType = 1): Result<IPowerPlant, Error> {
    // current burnrate will be a settable parameter.
    const powerPlant: IPowerPlant = {
        name: name,
        uuid: uuid(),
        fuel: fuel,
        burnRate: { current: burnRateMax, max: burnRateMax },
        fuelTank: { current: fuelTankMax, max: fuelTankMax },
        hitpoints: { current: hitPointsMax, max: hitPointsMax },
        durability: { current: durabilityMax, max: durabilityMax }
    }
    return Ok(powerPlant)
}

function weaponFactory(name = "Banana Gun", weaponAmmunition: ammunition = 1, weaponMass = 10, weaponPowerConsumption = 10, weaponDamage = 10, weaponFireRate = 10, weaponDurability = 10, weaponHitPoints = 10): Result<IWeapon, Error> {
    let weapon: IWeapon = {
        name: name,
        uuid: uuid(),
        mass: weaponMass,
        powerConsumption: weaponPowerConsumption,
        ammunition: weaponAmmunition,
        damage: weaponDamage,
        fireRate: weaponFireRate,
        durability: weaponDurability,
        hitpoints: weaponHitPoints,
    }

    return Ok(weapon)
}

function engineFactory(engineName = `fish`, engineMass = 500, engineVolume = 10, engineThrust = 10, enginePowerConsumption = 10): Result<IEngine, Error> {
    const engine: IEngine = {
        uuid: uuid(),
        name: engineName,
        mass: engineMass,
        volume: engineVolume,
        thrust: engineThrust,
        powerConsumption: enginePowerConsumption,
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


//console.log(util.inspect(spaceShipPrep(), true, 10, true));
console.log(util.inspect(starBasePrep(), true, 10, true));