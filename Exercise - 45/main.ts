
function storeCarInfo(manufacturer: string, model: string, ...options: [string, any][]): { manufacturer: string, model: string, [key: string]: any } {
    return {
        manufacturer: manufacturer,
        model: model,
        ...Object.fromEntries(options)
    };
}


let car = storeCarInfo("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);


console.log(car);
