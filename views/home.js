document.getElementById('delete').onclick = function() {
    var checkboxes = document.getElementsByName('checkbox');
    for (var checkbox of checkboxes) {
      if (checkbox.checked)
       console.log(checkbox.value);
    }
  }
  $("#delete").css('background-color','red');
  $("#lol").css('background-color','red');