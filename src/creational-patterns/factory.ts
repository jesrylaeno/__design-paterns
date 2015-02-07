
/**
 *          The Factory Pattern provides a way to create objects without specifying the exact class of the object that will be created.
 *          Use case: When you want to delegate the instantiation of objects to a factory method, typically for creating complex objects.
 */

interface Car {
    drive(): void;
}

class Sedan implements Car {
    drive() {
        console.log("Driving a sedan.");
    }
}

class SUV implements Car {
    drive() {
        console.log("Driving an SUV.");
    }
}

export class CarFactory {
    static createCar(type: string): Car {
        if (type === "Sedan") {
            return new Sedan();
        } else if (type === "SUV") {
            return new SUV();
        }
        throw new Error("Unknown car type");
    }
}

/**
 *          Explanation: The CarFactory class abstracts the logic of object creation. Clients can request a Car without worrying about which class will be instantiated.
 */