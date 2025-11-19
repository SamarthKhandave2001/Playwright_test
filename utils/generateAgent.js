function generateName() {
  const syllables = [
    "la", "na", "ra", "ma", "sa", "ta", "ka", "jo", "ro", "mi",
    "li", "no", "va", "ke", "shi", "ri", "do", "mo", "ne", "ki",
    "ha", "su", "to", "za", "pa", "re", "fa", "lo", "si", "ga"
  ];
  let name = "";
  while (name.length < 6) {
    name += syllables[Math.floor(Math.random() * syllables.length)];
  }
  return name.substring(0, Math.floor(Math.random() * (8 - 6 + 1)) + 6);
}

function generateINPhone() {
  const randDigit = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const first = randDigit(6, 9);
  const rest = Array.from({ length: 9 }, () => randDigit(0, 9)).join('');
  return `${first}${rest}`;
}
const firstName = generateName()
const lastName = generateName()
export const agentData = {
  firstName: firstName,
  lastName: lastName,
  email: `${firstName}.${lastName}@mail.com`.toLowerCase(),
  phone: generateINPhone()
};