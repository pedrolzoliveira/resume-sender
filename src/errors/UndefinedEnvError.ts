export class UndefinedEnvError extends Error {
    constructor(public MissingEnvironmentVariables: string[]) {
        super("Missing environment variables");  
    }
}