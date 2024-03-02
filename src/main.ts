// Factory function returns a fully initialized object
import { ISpaceship, IBoundedValue, quality, fuelType, ammunition, IEngine, IBerthing, IWeapon, ILifeSupport, IPowerPlant } from "./interfaces";
import { Result, Ok, Err } from "ts-results-es";
import { v4 as uuid } from "uuid";

function getRandomIntInclusive(max: number, min = 1): Result<number, Error> {
    if (max > Number.MAX_SAFE_INTEGER || max < 0) {
        return Err(new Error(`maximum integer size exceeded or maximum set to less than zero.`))
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    const range = max - min + 1
    return Ok(Math.floor(Math.random() * range + min));

}

function spaceshipFactory(engine = 3): Result<ISpaceship, Error> {
    let engines = engine
    let spaceShip: ISpaceship = {
        name: ``,
        uuid: ``,
        engines: IEngine[],
        berthing: IBerthing[],
        armor: number, // Zero armor is an unarmored ship
        weapons: IWeapon[], // Array of zero length for unarmed ships
        cargo: number, // Zero cargo is a ship with zero cargospace, not an error.
        lifeSupport: ILifeSupport,
        powerPlant: IPowerPlant[],

    }


    return Ok(spaceShip)

}

function weaponFactory(weaponMass = 100, name = "Banana Gun", ammo = ammunition.KINETIC): Result<IWeapon, Error> {
    let weapon: IWeapon = {
        name: '',
        uuid: ``,
        mass: weaponMass,
        powerConsumption: weaponMass,
        ammunition: ammunition.KINETIC,
        damage: weaponMass,
        fireRate: weaponMass,
        durability: weaponMass,
        hitpoints: weaponMass,
    }

    weapon.name = name;
    weapon.uuid = uuid();
    weapon.mass = getRandomIntInclusive(weaponMass, 10).unwrap();
    weapon.powerConsumption = getRandomIntInclusive(weaponMass, 10).unwrap();
    weapon.ammunition = ammo
    weapon.damage = getRandomIntInclusive(weaponMass, 10).unwrap();
    weapon.fireRate = getRandomIntInclusive(weaponMass, 10).unwrap();
    weapon.durability = getRandomIntInclusive(weaponMass, 10).unwrap();
    weapon.hitpoints = getRandomIntInclusive(weaponMass, 10).unwrap();

    return Ok(weapon)
}

function engineFactory(engineMass = 500, engineName = `fish`,): Result<IEngine, Error> {
    let engine: IEngine = {
        uuid: ``,
        name: ``,
        mass: engineMass,
        volume: 0,
        thrust: 0,
        powerConsumption: 0
    }

    engine.uuid = uuid()
    engine.mass = getRandomIntInclusive(engineMass, 10).unwrap(); //HACK: Unwrap is unsafe, upgrade to unwrapOr or unwrapOrElse
    engine.name = engineName;
    engine.powerConsumption = getRandomIntInclusive(engineMass, 10).unwrap()
    engine.thrust = getRandomIntInclusive(engineMass, 10).unwrap();
    engine.volume = getRandomIntInclusive(engineMass, 10).unwrap();

    return Ok(engine)
}