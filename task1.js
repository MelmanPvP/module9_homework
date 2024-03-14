let students = []
const parser = new DOMParser();
const XMlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
const xmlDOM = parser.parseFromString(XMlString, 'text/xml');
let student = xmlDOM.querySelectorAll('student');

student.forEach(item => {
     students.push( {
        name: item.querySelector('first').textContent,
        surname : item.querySelector('second').textContent,
        age: item.querySelector('age').textContent,
         lang: item.querySelector('name').getAttribute('lang')
    })
});
console.log(students)
// const listNode = XMLdom.querySelector('list');
// const nameNode = listNode.querySelector('name1');
// const studentNode = listNode.querySelector('student1');
// const firstnameNode = studentNode.querySelector('first1');
// const secondnameNode = studentNode.querySelector('second1');
// const ageNode = studentNode.querySelector('age1');
// const profNode = studentNode.querySelector('prof1');
// const langAttr = nameNode.getAttribute('lang');
// const listNode2 = XMLdom.querySelector('list');
// const nameNode2 = listNode2.querySelector('name2');
// const studentNode2 = listNode2.querySelector('student2');
// const firstnameNode2 = studentNode2.querySelector('first2');
// const secondnameNode2 = studentNode2.querySelector('second2');
// const ageNode2 = studentNode2.querySelector('age2');
// const profNode2 = studentNode2.querySelector('prof2');
// const langAttr2 = nameNode2.getAttribute('lang');
// const result = {
//     lang: langAttr,
//     // full_name: nameNode.textContent,
//     first_name: firstnameNode.textContent,
//     second_name: secondnameNode.textContent,
//     age: ageNode.textContent,
//     profession: profNode.textContent,
//     lang: langAttr2,
//     // full_name: nameNode.textContent,
//     first_name: firstnameNode2.textContent,
//     second_name: secondnameNode2.textContent,
//     age: ageNode2.textContent,
//     profession: profNode2.textContent
// }
// console.log(result)
