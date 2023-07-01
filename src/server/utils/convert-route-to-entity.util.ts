const mapping: Record<string, string> = {
  businesses: 'business',
  orders: 'order',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
