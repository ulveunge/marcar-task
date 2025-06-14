export default function createOptions<T extends object>(
  defaults: T,
  options: Partial<T>,
) {
  return {
    ...defaults,
    ...Object.fromEntries(
      Object.entries(options).filter(([key]) => Object.hasOwn(options, key)),
    ),
  };
}
