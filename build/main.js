"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts_results_es_1 = require("ts-results-es");
const uuid_1 = require("uuid");
const util_1 = __importDefault(require("util"));
function berthingFactory(berthingMass = 10, berthingVolume = 10, quality = 3, berthingMaxCapacity = 10, berthingMaxHitpoints = 10, berthingMaxDurability = 10, berthingMaxPowerConsumption = 10) {
    const berthing = {
        uuid: (0, uuid_1.v4)(),
        mass: berthingMass,
        volume: berthingVolume,
        quality: quality,
        capacity: { current: berthingMaxCapacity, max: berthingMaxCapacity },
        hitPoints: { current: berthingMaxHitpoints, max: berthingMaxHitpoints },
        durability: { current: berthingMaxDurability, max: berthingMaxDurability },
        powerConsumption: berthingMaxPowerConsumption,
    };
    return (0, ts_results_es_1.Ok)(berthing);
}
function lifeSupportFactory(lifeSupportMass = 50, name = 'living', lifeSupportMaxPowerConsumption = 10, lifeSupportMaxDurability = 10, lifeSupportMaxEfficiency = 10) {
    const lifeSupport = {
        uuid: (0, uuid_1.v4)(),
        name: name,
        mass: lifeSupportMass,
        volume: lifeSupportMass,
        powerConsumption: lifeSupportMass,
        hitPoints: { current: lifeSupportMaxPowerConsumption, max: lifeSupportMaxPowerConsumption },
        durability: { current: lifeSupportMaxDurability, max: lifeSupportMaxDurability },
        efficiency: { current: lifeSupportMaxEfficiency, max: lifeSupportMaxEfficiency },
    };
    return (0, ts_results_es_1.Ok)(lifeSupport);
}
function powerPlantFactory(name = `Zippyzaps`, burnRateMax = 10, fuelTankMax = 10, hitPointsMax = 10, durabilityMax = 10, fuel = 1) {
    // current burnrate will be a settable parameter.
    const powerPlant = {
        name: name,
        uuid: (0, uuid_1.v4)(),
        fuel: fuel,
        burnRate: { current: burnRateMax, max: burnRateMax },
        fuelTank: { current: fuelTankMax, max: fuelTankMax },
        hitpoints: { current: hitPointsMax, max: hitPointsMax },
        durability: { current: durabilityMax, max: durabilityMax }
    };
    return (0, ts_results_es_1.Ok)(powerPlant);
}
function weaponFactory(name = "Banana Gun", weaponAmmunition = 1, weaponMass = 10, weaponPowerConsumption = 10, weaponDamage = 10, weaponFireRate = 10, weaponDurability = 10, weaponHitPoints = 10) {
    let weapon = {
        name: name,
        uuid: (0, uuid_1.v4)(),
        mass: weaponMass,
        powerConsumption: weaponPowerConsumption,
        ammunition: weaponAmmunition,
        damage: weaponDamage,
        fireRate: weaponFireRate,
        durability: weaponDurability,
        hitpoints: weaponHitPoints,
    };
    return (0, ts_results_es_1.Ok)(weapon);
}
function engineFactory(engineName = `fish`, engineMass = 500, engineVolume = 10, engineThrust = 10, enginePowerConsumption = 10) {
    const engine = {
        uuid: (0, uuid_1.v4)(),
        name: engineName,
        mass: engineMass,
        volume: engineVolume,
        thrust: engineThrust,
        powerConsumption: enginePowerConsumption,
    };
    return (0, ts_results_es_1.Ok)(engine);
}
function spaceshipFactory(name, engines, weapons, berthing, lifesupport, powerplants, cargo = 10, armor = 10) {
    const spaceShip = {
        name: name,
        uuid: (0, uuid_1.v4)(),
        engines: engines,
        weapons: weapons,
        cargo: cargo,
        berthing: berthing,
        armor: armor,
        lifeSupport: lifesupport,
        powerPlants: powerplants,
    };
    return (0, ts_results_es_1.Ok)(spaceShip);
}
function spaceShipPrep() {
    const berthing = [berthingFactory().unwrap()];
    const lifeSupport = lifeSupportFactory().unwrap();
    const power = [powerPlantFactory().unwrap()];
    const weapons = [weaponFactory().unwrap()];
    const engines = [engineFactory().unwrap()];
    const test = spaceshipFactory(`jump tiddy`, engines, weapons, berthing, lifeSupport, power);
    if (test.isErr()) {
        console.error(test.unwrapErr());
        process.exit(1);
    }
    return test.unwrap();
}
function starBaseFactory(name, weapons, berthing, lifesupport, powerplants, cargo = 10, armor = 10) {
    const starBase = {
        name: name,
        uuid: (0, uuid_1.v4)(),
        weapons: weapons,
        cargo: cargo,
        berthing: berthing,
        armor: armor,
        lifeSupport: lifesupport,
        powerPlants: powerplants,
    };
    return (0, ts_results_es_1.Ok)(starBase);
}
function starBasePrep() {
    const berthing = [berthingFactory().unwrap()];
    const lifeSupport = lifeSupportFactory().unwrap();
    const power = [powerPlantFactory().unwrap()];
    const weapons = [weaponFactory().unwrap()];
    const test = starBaseFactory(`Fort Kickass`, weapons, berthing, lifeSupport, power);
    if (test.isErr()) {
        console.error(test.unwrapErr());
        process.exit(1);
    }
    return test.unwrap();
}
//console.log(util.inspect(spaceShipPrep(), true, 10, true));
console.log(util_1.default.inspect(starBasePrep(), true, 10, true));
//# sourceMappingURL=main.js.map