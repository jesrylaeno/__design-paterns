
/**
 *          The Command Pattern allows you to turn requests into objects that can be passed, stored, and executed.
 *          Use case: When you want to parameterize objects according to an action, queue requests, or log requests for undo/redo functionality.
 */

interface Command {
    execute(): void;
}

export class Light {
    on() {
        console.log("The light is ON");
    }

    off() {
        console.log("The light is OFF");
    }
}

export class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.on();
    }
}

export class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.off();
    }
}

export class RemoteControl {
    private command!: Command;

    setCommand(command: Command): void {
        this.command = command;
    }

    pressButton(): void {
        this.command.execute();
    }
}

/**
 *          Explanation: The Command pattern allows us to encapsulate a request as an object, making it easier to store, undo, or queue commands.
 */
