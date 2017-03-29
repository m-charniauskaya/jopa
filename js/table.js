
var names = [
{id: 4, username: 'admin', first_name: 'ad', last_name: 'min', password: '123123'},
{id: 3, username: 'user_1', first_name: 'user', last_name: '11', password: '123123'},
{id: 1, username: 'user_2', first_name: 'user', last_name: '22', password: '123123'}
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

  $('th').on("click", function(){

    $('table').click(function(event){
      var target = event.target.id;
      console.log(target);

      sorting = names.sort(function(a,b){
        console.log(target);
        console.log(a);
        console.log(a.target);
        if (a.target > b.target) return 1;
        if (b.target > a.target) return -1;
    });

      sorting;
    })


    console.log(names);

    var table = document.getElementsByTagName("table")[0];
    table.parentNode.removeChild(table);

    document.body.innerHTML = '<table class = "table"><tr><th>ID</th><th>Username</th><th>First Name</th><th>Last Name</th><th>Password</th></tr></table>'
    for (var i in names){
      var sort_row = $('table').append('<tr><td>'+names[i].id+'</td><td>'+names[i].username+'</td><td>'+names[i].first_name+'</td><td>'+names[i].last_name+'</td><td>'+names[i].password+'</td></tr>');
    };
  });
})
