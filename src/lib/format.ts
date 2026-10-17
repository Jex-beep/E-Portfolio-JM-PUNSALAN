const NUMBER_WORDS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
] as const

/** Editorial style: spell out small counts in prose, numerals beyond twelve. */
export function countWord(count: number, { capitalize = false } = {}): string {
  const word = NUMBER_WORDS[count] ?? String(count)
  return capitalize ? word.charAt(0).toUpperCase() + word.slice(1) : word
}
