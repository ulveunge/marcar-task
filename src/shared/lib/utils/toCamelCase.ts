export default function toCamelCase(str: string): string {
  return str
    .replace(/([-_][a-zа-я])/gi, (group) =>
      group.toUpperCase().replace('-', '').replace('_', ''),
    )
    .replace(/^[A-ZА-Я]/, (firstChar) => firstChar.toLowerCase());
}
