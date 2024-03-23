"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_results_es_1 = require("ts-results-es");
const uuid_1 = require("uuid");
function berthingFactory(berthingMass = 10, berthingVolume = 10, quality, berthingMaxCapacity = 10, berthingMaxHitpoints = 10, berthingMaxDurability = 10, berthingMaxPowerConsumption = 10) {
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
        hitPoints: { current: 0, max: lifeSupportMaxPowerConsumption },
        durability: { current: 0, max: lifeSupportMaxDurability },
        efficiency: { current: 0, max: lifeSupportMaxEfficiency },
    };
    return (0, ts_results_es_1.Ok)(lifeSupport);
}
function powerPlantFactory(name = `Zippyzaps`, burnRateMax = 10, fuelTankMax = 10, hitPointsMax = 10, durabilityMax = 10, fuel) {
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
function weaponFactory(name = "Banana Gun", weaponMass = 10, weaponPowerConsumption = 10, weaponAmmunition, weaponDamage = 10, weaponFireRate = 10, weaponDurability = 10, weaponHitPoints = 10) {
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
function spaceshipFactory(name, engines, weapons, cargo = 10, berthing, armor = 10, lifesupport, powerplant) {
    const spaceShip = {
        name: name,
        uuid: (0, uuid_1.v4)(),
        engines: engines,
        berthing: berthing,
        armor: armor,
        weapons: weapons,
        cargo: cargo,
        lifeSupport: lifesupport,
        powerPlant: powerplant,
    };
    return (0, ts_results_es_1.Ok)(spaceShip);
}
console.log(spaceshipFactory);
//# sourceMappingURL=main.js.map