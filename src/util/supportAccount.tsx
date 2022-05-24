export function splitNameAndBirthDay(str: String) {
  return {
    name: str.split('-')[0],
    birthDay: str.split('-')[1].split(':')[1],
  };
}

export function splitClassAndMajors(str: String) {
  return {
    class: str.split('-')[0],
    majors: str.split('-')[1].split(':')[1],
  };
}
