import { Result, Ok, Err } from "ts-results-es";

function getRandomIntInclusive(max: number, min = 1): Result<number, Error> {
    if (max > Number.MAX_SAFE_INTEGER || max < 0) {
        return Err(new Error(`maximum integer size exceeded or maximum set to less than zero.`))
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    const range = max - min + 1
    return Ok(Math.floor(Math.random() * range + min));
}