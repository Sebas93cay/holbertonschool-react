import { Seq } from 'immutable';

const capitalizeName = (name) => `${name[0].toUpperCase()}${name.slice(1)}`;

const printBestStudents = (object) => {
  const students = Seq(object);
  const filteredStudents = students.filter((value) => value.score > 70);
  const stds = filteredStudents.toJS();
  Object.keys(stds).map((std) => {
    stds[std].firstName = capitalizeName(stds[std].firstName);
    stds[std].lastName = capitalizeName(stds[std].lastName);
    return stds[std];
  });

  console.log(stds);
};

export default printBestStudents;
