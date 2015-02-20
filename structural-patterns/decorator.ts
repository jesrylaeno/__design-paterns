
/**
 *          The Decorator Pattern allows you to add new functionality to an object dynamically, without altering its structure.
 *          Use case: When you want to extend the functionality of objects at runtime without changing the classes.
 */

interface Coffee {
    cost(): number;
}

export class SimpleCoffee implements Coffee {
    cost(): number {
        return 5;
    }
}

export class MilkDecorator implements Coffee {
    private coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    cost(): number {
        return this.coffee.cost() + 2; // Adds cost of milk
    }
}

export class SugarDecorator implements Coffee {
    private coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    cost(): number {
        return this.coffee.cost() + 1; // Adds cost of sugar
    }
}

/**
 *          Explanation: The Decorator pattern allows you to add new behavior (like milk or sugar) to a Coffee object dynamically.
 */
