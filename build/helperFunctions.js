"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomIntInclusive = void 0;
const ts_results_es_1 = require("ts-results-es");
function getRandomIntInclusive(max, min = 1) {
    if (max > Number.MAX_SAFE_INTEGER || max < 0) {
        return (0, ts_results_es_1.Err)(new Error(`maximum integer size exceeded or maximum set to less than zero.`));
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    const range = max - min + 1;
    return (0, ts_results_es_1.Ok)(Math.floor(Math.random() * range + min));
}
exports.getRandomIntInclusive = getRandomIntInclusive;
//# sourceMappingURL=helperFunctions.js.map