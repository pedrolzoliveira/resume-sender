export class FactoryError extends Error {
    constructor(factory: any, error: Error) {
        super(`error when creating ${factory.name}: ${error.message}`);
    }
}