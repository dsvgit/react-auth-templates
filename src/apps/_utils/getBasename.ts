export function getBasename(baseUrl: string | undefined, app: string) {
  if (baseUrl) {
    app = import.meta.env.MODE === "development" ? "" : app;
    return "/" + baseUrl.match(/([^\/]*)\/*$/)?.[1] + app;
  }

  return undefined;
}
