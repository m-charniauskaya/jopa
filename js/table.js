
var names = [
{id: 4, username: 'dadmin', first_name: 'ad', last_name: 'min', password: '123123'},
{id: 3, username: 'suser_1', first_name: 'user', last_name: '11', password: '123123'},
{id: 1, username: 'buser_2', first_name: 'user', last_name: '22', password: '123123'}
];

$(document).ready(function() {
  names.forEach(function(item, i, names) {
    var new_row = $('.table').append('<tr class = "new_row"></tr>');
    var person = item;

    for (value in person) {
      var new_td = $('.new_row').last().append('<td>'+person[value]+'</td>');
    };
  });

  var sorting;

  $("body").on("click", "th", function(event){

      var target;
      target = $(this).attr('id');
      console.log($(this));
      var td = document.getElementById(target);
      console.log(td.classList);

      if (td.classList.contains("reverse")) {
        sorting = names.sort(function(a,b){
          if (a[target] > b[target]) return -1;
          if (b[target] > a[target]) return 1;
        });
        var reverse = true;
      } else {
        sorting = names.sort(function(a,b){
          if (a[target] > b[target]) return 1;
          if (b[target] > a[target]) return -1;
    });
        var reverse = false;
  }

    console.log(names);

    var table = document.getElementsByTagName("table")[0];
    table.parentNode.removeChild(table);

    if (reverse) {
      document.body.innerHTML = '<table class = "table"><tr><th id="id" >ID</th><th id="username">Username</th><th id = "first_name">First Name</th><th id="last_name">Last Name</th><th id="password">Password</th></tr></table>';
    } else {
      document.body.innerHTML = '<table class = "table"><tr><th id="id" class="reverse">ID</th><th id="username" class="reverse">Username</th><th id = "first_name" class="reverse">First Name</th><th id="last_name" class="reverse">Last Name</th><th id="password" class="reverse">Password</th></tr></table>';
    }

    for (var i in names){
      var sort_row = $('table').append('<tr><td>'+names[i].id+'</td><td>'+names[i].username+'</td><td>'+names[i].first_name+'</td><td>'+names[i].last_name+'</td><td>'+names[i].password+'</td></tr>');
    };
  });
})
