var res =  fetch('https://restcountries.com/v2/all')
            .then((data)=>data.json())
            .then((data1)=>foo(data1))
            .catch((error)=>{
                console.log(error);
            });


function foo(data){
    console.log(data);
    var container = document.createElement('div');
    container.className = 'container';

    var row =document.createElement('div')
    row.className = 'row';

    container.append(row);

    for(var i= 0; i<data.length; i++){
        row.innerHTML += `
        <div class="col-md-4 mb-3">
            <div class="card" style="width: 25rem; height: 28rem;">
                <div class="card-header text-center" style="background-color:black;color:white;">
                    ${data[i]['name']}
                </div>
            <img src="${data[i]['flags']['png']}" class="card-img-top" style="width:400px;height: 200px;object-fit: cover;" >
                <div class="card-body">
                    <p class="text-center">Capital : ${data[i]['capital']}</p>
                    <p class="text-center">Asia : ${data[i]['region']}</p>
                    <p class="text-center">Country Code : ${data[i]['cioc']}</p>
                    <button class="btn btn-outline-primary btn-sm w-100">Check Weather</button>
                </div>
            </div>
        </div>
        `;

        document.body.append(container);
    }
}