export enum Environment {
  Development,
  Production,
}

const currentEnvironment =
  process.env.NODE_ENV === "development"
    ? Environment.Development
    : Environment.Production;

export const isDevelopment = currentEnvironment === Environment.Development;