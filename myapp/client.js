$(document).ready(function(){
    function getUsers(){
        $.get('/getusers',function(data){
            createTable($('#table'), data)
        })
    }
    getUsers();
})


const createTable = (element, data) => {
    data = JSON.parse(data);
    console.log(data);
    element = element.get(0);
    console.log(element);
    var tbl = document.createElement('table');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement('tr');
        var tdName = document.createElement('td')
        tdName.innerText = data[i].username;
        tdName.classList.add('red');
        var tdPass = document.createElement('td')
        tdPass.innerText = data[i].password;
        tdPass.classList.add('blue');
        var tdAge = document.createElement('td')
        tdAge.innerText = data[i].age;
        tdAge.classList.add('green');
        tr.appendChild(tdName);
        tr.appendChild(tdPass);
        tr.appendChild(tdAge);
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    element.appendChild(tbl);
}
