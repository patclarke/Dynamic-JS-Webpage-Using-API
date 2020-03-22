const api_url = $URL;

// get json object from api
function getObjectFromAPI(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // send object to be cleaned up
       data_cleanup(data);        
    })
    .catch(error => console.error(error))
}

// iterate through object and build a clean array
function data_cleanup(data){
    clean_array = [];
    let jsonData = JSON.parse(Object.values(data)[1]);
    Object.values(jsonData).forEach(function(value){  
        //console.log(value); 
        clean_array.push(value);
    });
    // send clean array to build a table
    build_table(clean_array);

}

// build html table body from array
function build_table(array){
    var html_table = '<tbody><tr><thead><tr><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">Start Date</th></tr></thead><tbody>';
    for (var i=0; i<array.length; i++){
        console.log(array[i]);
        html_table += '<tr><td>' + array[i][2] + '</td><td>' + array[i][3] + '</td><td>' + array[i][4] + '</td></tr>';
    }
    html_table += '</tr></tbody>';
    console.log(html_table);
    document.getElementById("staff_table2").innerHTML = html_table;
}

// function to call api, build clean array, and create html table
getObjectFromAPI(api_url);
