export function getBasename(baseUrl: string | undefined, app: string) {
  if (baseUrl) {
    return "/" + baseUrl.match(/([^\/]*)\/*$/)?.[1] + app;
  }

  return undefined;
}
