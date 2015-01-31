
/**
 *          The Singleton Pattern ensures that a class has only one instance and provides a global point of access to it.
 *          Use case: When you need exactly one instance of a class, such as a database connection or configuration manager.
 */

export class Singleton {
    private static instance: Singleton;

    private constructor() {
        console.log("Singleton instance created.");
    }

    static getInstance(): Singleton {
        console.log("Singleton getInstance() called.");
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

/**
 *          Explanation: The getInstance() method ensures that only one instance of the Singleton class exists. 
 *          If an instance already exists, it will return the existing one.
 */