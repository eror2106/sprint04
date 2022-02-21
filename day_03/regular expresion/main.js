is_valid_variable("first_name"); //True
is_valid_variable("first-name"); // False
is_valid_variable("1first_name"); // False
is_valid_variable("firstname"); // True
function is_valid_variable(test) {
  let regex = /[1-]/g;
  if (test.match(regex)) {
    console.log("false");
    return;
  } else {
    console.log("true");
    return;
  }
}
