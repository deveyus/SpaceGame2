"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Factory function returns a fully initialized object
const interfaces_1 = require("./interfaces");
const ts_results_es_1 = require("ts-results-es");
const uuid_1 = require("uuid");
const util_1 = __importDefault(require("util"));
function berthingFactory(name = `Berthing unit`, berthingMass = 10, berthingVolume = 10, quality = 3, berthingMaxCapacity = 10, berthingMaxHitpoints = 10, berthingMaxDurability = 10, berthingMaxPowerConsumption = 10) {
    const berthing = {
        metaInfo: {
            uuid: (0, uuid_1.v4)(),
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
    };
    return (0, ts_results_es_1.Ok)(berthing);
}
function lifeSupportFactory(lifeSupportMass = 50, name = 'living', lifeSupportVolume = 10, lifeSupportMaxHitpoints = 10, lifeSupportMaxPowerConsumption = 10, lifeSupportMaxDurability = 10, lifeSupportMaxEfficiency = 10) {
    const lifeSupport = {
        metaInfo: {
            uuid: (0, uuid_1.v4)(),
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
    };
    return (0, ts_results_es_1.Ok)(lifeSupport);
}
function powerPlantFactory(name = `Zippyzaps`, powerPlantMass = 10, powerPlantVolume = 10, burnRateMax = 10, fuelTankMax = 10, hitPointsMax = 10, powerPlantMaxDurability = 10, powerPlantMaxPowerConsumption = 10, fuel = 1) {
    // current burnrate will be a settable parameter.
    const powerPlant = {
        metaInfo: {
            uuid: (0, uuid_1.v4)(),
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
    };
    return (0, ts_results_es_1.Ok)(powerPlant);
}
function weaponFactory(name = "Banana Gun", weaponAmmunition = 1, weaponMass = 10, weaponVolume = 10, weaponMaxPowerConsumption = 10, weaponDamage = 10, weaponFireRate = 10, weaponMaxDurability = 10, weaponMaxHitPoints = 10) {
    const weapon = {
        metaInfo: {
            uuid: (0, uuid_1.v4)(),
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
    };
    return (0, ts_results_es_1.Ok)(weapon);
}
function engineFactory(engineName = `fish`, engineMass = 500, engineVolume = 10, engineThrust = 10, engineMaxPowerConsumption = 10, engineMaxHitpoints = 10, engineMaxDurability = 10) {
    const engine = {
        metaInfo: {
            uuid: (0, uuid_1.v4)(),
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
function researchBlueprintBOM(bom) {
    const randomizedItems = bom.items.map(item => {
        const itemMin = item.quantity * 0.9;
        const itemMax = item.quantity * 1.1;
        item.quantity = Math.random() * (itemMax - itemMin) + itemMin;
        return item;
    });
    return {
        ...bom,
        items: randomizedItems
    };
}
function researchBlueprintPart(blueprint) {
    for (const property in blueprint.partProps) {
    }
    for (const property in blueprint.coreStats) {
    }
    for (const property in blueprint.items) {
    }
    return blueprint;
}
const test = {
    items: [
        { name: interfaces_1.BOMItem.METAL_BEAMS, quantity: 37 },
        { name: interfaces_1.BOMItem.ELECTRONICS, quantity: 15 }
    ]
};
//console.log(util.inspect(spaceShipPrep(), true, 10, true));
console.log(util_1.default.inspect(spaceShipPrep(), true, 10, true));
//# sourceMappingURL=main.js.map