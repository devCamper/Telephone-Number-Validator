function telephoneCheck(str) {
  // Good luck!
  let digits = str.match(/^1?[^0-9]*[0-9][^0-9]*[0-9][^0-9]*[0-9][^0-9]*[0-9][^0-9]*[0-9][^0-9]*[0-9][^0-9]*[0-9][^0-9]*[0-9][^0-9]*[0-9][^0-9]*[0-9]$/) == str
  let brackets = str.match(/^[^()]*[(][^()]*[)][^()]*$/) == str
  let noBrackets = str.match(/^[^()]*$/) == str
  return digits && (brackets || noBrackets)
}

telephoneCheck("1 555555-5555");
telephoneCheck("1 555)555-5555");
telephoneCheck("555)-555-5555")
telephoneCheck("(555-555-5555")
telephoneCheck("(555)5(55?)-5555");