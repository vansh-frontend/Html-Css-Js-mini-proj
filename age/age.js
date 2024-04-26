function calculateAge() {
  var dob = document.getElementById("dob").value;
  var today = new Date();
  var birthDate = new Date(dob);
  var age = today.getFullYear() - birthDate.getFullYear();
  var month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  document.getElementById("result").innerHTML = "Your age is: " + age;
}
