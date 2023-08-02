export default function cleanSet(set, startString) {
  const valuesWithStartString = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return valuesWithStartString.join('-');
}
