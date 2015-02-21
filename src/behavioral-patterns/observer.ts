
/**
 *          The Observer Pattern allows an object (the subject) to notify other objects (the observers) of any changes to its state.
 *          Use case: When you have a one-to-many dependency between objects, such as event handling or messaging systems.
 */

interface Observer {
    update(message: string): void;
}

export class ConcreteObserver implements Observer {
    constructor(private name: string) {}

    update(message: string): void {
        console.log(`${this.name} received message: ${message}`);
    }
}

export class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    notifyObservers(message: string): void {
        this.observers.forEach(observer => observer.update(message));
    }
}

/**
 *          Explanation: The Observer pattern decouples the subject and observers, 
 *          so that multiple observers can react to changes in the subject without knowing about each other.
 */
