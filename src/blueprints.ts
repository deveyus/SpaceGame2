interface IBerthing {
    name: string;
    uuid: string;
    mass: number;
    volume: number;
    quality: number;
    capacity: IBoundedValue;
    hitPoints: IBoundedValue;
    durability: IBoundedValue;
    powerConsumption: number;
}
