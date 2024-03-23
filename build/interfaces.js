"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ammunition = exports.fuelType = exports.quality = void 0;
var quality;
(function (quality) {
    quality[quality["BROKEN"] = 0] = "BROKEN";
    quality[quality["DAMAGED"] = 1] = "DAMAGED";
    quality[quality["POOR"] = 2] = "POOR";
    quality[quality["AVERAGE"] = 3] = "AVERAGE";
    quality[quality["GOOD"] = 4] = "GOOD";
    quality[quality["EXCELLENT"] = 5] = "EXCELLENT";
    quality[quality["LUXURY"] = 6] = "LUXURY";
})(quality || (exports.quality = quality = {}));
var fuelType;
(function (fuelType) {
    fuelType[fuelType["HYDROGEN"] = 0] = "HYDROGEN";
    fuelType[fuelType["RADIOISOTOPE"] = 1] = "RADIOISOTOPE";
    fuelType[fuelType["HYDROCARBON"] = 2] = "HYDROCARBON";
    fuelType[fuelType["SOLAR"] = 3] = "SOLAR";
    fuelType[fuelType["COCAINE"] = 4] = "COCAINE";
})(fuelType || (exports.fuelType = fuelType = {}));
var ammunition;
(function (ammunition) {
    ammunition[ammunition["KINETIC"] = 0] = "KINETIC";
    ammunition[ammunition["LASER"] = 1] = "LASER";
    ammunition[ammunition["PLASMA"] = 2] = "PLASMA";
    ammunition[ammunition["EXPLOSIVE"] = 3] = "EXPLOSIVE";
    ammunition[ammunition["ELECTRIC"] = 4] = "ELECTRIC";
    ammunition[ammunition["INCENDIARY"] = 5] = "INCENDIARY";
    ammunition[ammunition["ACID"] = 6] = "ACID"; //chemical reactions causing corrosion
})(ammunition || (exports.ammunition = ammunition = {}));
//# sourceMappingURL=interfaces.js.map