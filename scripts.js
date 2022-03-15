var people, index;

function addPeople(name, email, profession) {
  people = document.getElementById("dtPeople");
  var linesQuantity = people.rows.length;
  var line = people.insertRow(linesQuantity);
  var lineParams;

  var cellCode = line.insertCell(0);
  var cellName = line.insertCell(1);
  var cellEmail = line.insertCell(2);
  var cellProfession = line.insertCell(3);

  cellCode.innerHTML = linesQuantity;
  cellName.innerHTML = name;
  cellEmail.innerHTML = email;
  cellProfession.innerHTML = profession;
}
