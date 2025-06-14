import toCamelCase from './toCamelCase';

export function convertKeysToCamelCase<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(convertKeysToCamelCase) as unknown as T;
  }

  const result: Record<string, unknown> = {};

  Object.entries(obj).forEach(([key, value]) => {
    const camelCaseKey = toCamelCase(key);
    result[camelCaseKey] = convertKeysToCamelCase(value);
  });

  return result as T;
}
