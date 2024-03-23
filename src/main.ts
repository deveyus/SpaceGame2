// Factory function returns a fully initialized object
import { ISpaceship, IBoundedValue, quality, fuelType, ammunition, IEngine, IBerthing, IWeapon, ILifeSupport, IPowerPlant } from "./interfaces";
import { Result, Ok, Err } from "ts-results-es";
import { v4 as uuid } from "uuid";

function berthingFactory(berthingMass = 10, berthingVolume = 10, quality: quality = 3, berthingMaxCapacity = 10, berthingMaxHitpoints = 10, berthingMaxDurability = 10, berthingMaxPowerConsumption = 10): Result<IBerthing, Error> {
    const berthing: IBerthing = {
        uuid: uuid(),
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
        hitPoints: { current: 0, max: lifeSupportMaxPowerConsumption },
        durability: { current: 0, max: lifeSupportMaxDurability },
        efficiency: { current: 0, max: lifeSupportMaxEfficiency },

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

function spaceshipFactory(name: `jump tiddy`, engines: IEngine[], weapons: IWeapon[], cargo = 10, berthing: IBerthing[], armor = 10, lifesupport: ILifeSupport, powerplants: IPowerPlant[]): Result<ISpaceship, Error> {
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

    function spaceShipPrep(): object {
        const berthing = [berthingFactory().unwrap()];
        const lifeSupport = lifeSupportFactory().unwrap();
        const power = [powerPlantFactory().unwrap()];
        const weapons = [weaponFactory().unwrap()];
        const engines = [engineFactory().unwrap()];

        return spaceshipFactory(engines, weapons, berthing, lifeSupport, power);

    }
    
    return Ok(spaceShip)

}








spaceshipFactory()

console.log()