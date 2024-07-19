import { Seq } from 'immutable';

export default function printBestStudents (object) {
  const objSeq = Seq(object);
  const filtered = objSeq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  function capFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const JSObj = filtered.toJS();
  Object.keys(JSObj).map((key) => {
    JSObj[key].firstName = capFirstLetter(JSObj[key].firstName);
    JSObj[key].lastName = capFirstLetter(JSObj[key].lastName);
    return JSObj[key];
  });

  console.log(JSObj);
}
