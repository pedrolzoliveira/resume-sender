import "module-alias/register";
import "./utils/LoadEnv";
import { AppFactory } from "./factories/AppFactory";


async function main() {
    const app = await AppFactory.create();
    app.run();
}

main();