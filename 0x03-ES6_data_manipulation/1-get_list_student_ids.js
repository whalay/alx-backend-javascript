export default function getListStudentIds(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }

  return studentsArray.map(student => student.id);
}
