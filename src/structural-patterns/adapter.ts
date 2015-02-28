
/**
 *          The Adapter Pattern allows incompatible interfaces to work together by providing a wrapper around the incompatible object.
 *          Use case: When you need to integrate an existing class with a new system without modifying the existing class.
 */

interface OldSystem {
    oldMethod(): string;
}

export class LegacySystem implements OldSystem {
    oldMethod() {
        return "Old system method";
    }
}

interface NewSystem {
    newMethod(): string;
}

export class Adapter implements NewSystem {
    private oldSystem: OldSystem;

    constructor(oldSystem: OldSystem) {
        this.oldSystem = oldSystem;
    }

    newMethod(): string {
        return `Adapter: ${this.oldSystem.oldMethod()}`;
    }
}

/**
 *          Explanation: The Adapter class makes the OldSystem compatible with the NewSystem interface without modifying the existing classes.
 */