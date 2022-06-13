import "dotenv/config";

import { UndefinedEnvError } from "@errors/UndefinedEnvError";

const neededEnvVariables = [
    "GIT_REPO",
    "GIT_OWNER",
    "GIT_LABEL",
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASSWORD",
    "EMAIL_SUBJECT",
    "EMAIL_FROM",
    "RESUME_PATH",
    "DB_PATH"
];

const missingEnv = [];

neededEnvVariables.forEach(env => {
    if (process.env[env] == undefined) missingEnv.push(env);
});

if (missingEnv.length > 0) throw new UndefinedEnvError(missingEnv);
