var res =  fetch('https://jsonplaceholder.typicode.com/users')
            .then((data)=>data.json())
            .then((data1)=>foo(data1))
            .catch((error)=>{
                console.log(error);
            });


function foo(data){
    console.log(data);
    var container = document.getElementsByClassName('container')[0];

    var row =document.createElement('div')
    row.className = 'row';

    container.appendChild(row);

    for(var i= 0; i<data.length; i++){
        row.innerHTML += `
        <div class="col-md-3 mb-3">
            <div class="card shadow-sm  bg-white rounded">
                <div class="card-body bg-info">
                    <p class="text-dark font-weight-bold">Name : ${data[i]['name']}</p>
                    <p class="text-dark">Email : ${data[i]['email']}</p>
                    <p class="text-dark">Street : ${data[i]['address']['street']}</p>
                    <p class="text-dark">City : ${data[i]['address']['city']}</p>
                </div>
            </div>
        </div>
        `;

        document.body.appendChild(container);
    }
}