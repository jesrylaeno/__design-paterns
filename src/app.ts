// src/app.ts

import { Singleton } from "./creational-patterns/singleton";
import { CarFactory } from "./creational-patterns/factory";
import { Adapter, LegacySystem } from "./structural-patterns/adapter";
import { MilkDecorator, SimpleCoffee, SugarDecorator } from "./structural-patterns/decorator";
import { ConcreteObserver, Subject } from "./behavioral-patterns/observer";
import { Light, LightOffCommand, LightOnCommand, RemoteControl } from "./behavioral-patterns/command";

enum pattern {
    SINGLETON = "singleton",
    FACTORY = "factory",
    ADAPTER = "adapter",
    DECORATOR = "decorator",
    OBSERVER = "observer",
    COMMAND = "command",
}

const run = (pattern: pattern) => {
    switch(pattern) {
        case "singleton":
            const instance1 = Singleton.getInstance();
            const instance2 = Singleton.getInstance();
            console.log("Are both instances the same?", instance1 === instance2); // true
            break;

        case "factory":
            const car1 = CarFactory.createCar("Sedan");
            car1.drive();  // Driving a sedan.
            const car2 = CarFactory.createCar("SUV");
            car2.drive();  // Driving an SUV.
            break;

        case "adapter":
            const legacySystem = new LegacySystem();
            const adapter = new Adapter(legacySystem);
            console.log(adapter.newMethod());  // Adapter: Old system method
            break;

        case "decorator":
            const simpleCoffee = new SimpleCoffee();
            console.log(simpleCoffee.cost());  // 5

            const milkCoffee = new MilkDecorator(simpleCoffee);
            console.log(milkCoffee.cost());  // 7

            const milkSugarCoffee = new SugarDecorator(milkCoffee);
            console.log(milkSugarCoffee.cost());  // 8
            break;

        case "observer":
            const subject = new Subject();
            const observer1 = new ConcreteObserver("Observer 1");
            const observer2 = new ConcreteObserver("Observer 2");

            subject.addObserver(observer1);
            subject.addObserver(observer2);

            subject.notifyObservers("Hello Observers!");  
            // Observer 1 received message: Hello Observers!
            // Observer 2 received message: Hello Observers!
            break;

        case "command":
            const light = new Light();
            const lightOn = new LightOnCommand(light);
            const lightOff = new LightOffCommand(light);

            const remote = new RemoteControl();
            remote.setCommand(lightOn);
            remote.pressButton();  // The light is ON
            remote.setCommand(lightOff);
            remote.pressButton();  // The light is OFF
            break;

        default:
            console.log(`Unknown pattern: ${pattern}`);
            break;
    }
};

run(pattern.SINGLETON);
run(pattern.FACTORY);
run(pattern.ADAPTER);
run(pattern.DECORATOR);
run(pattern.OBSERVER);
run(pattern.COMMAND);
