//Files that are already known 
const known = ["Data.reference.json, Data.data3.json"];

//Fetch a Json File function
function Json_File(f_name) {
    return fetch(f_name)
        .then(response => {
            if(!response.ok) {
                throw new Error('Failed');
            }
            return response.json();
        });


}

//function to display the data 
function Data(display){
    const table = document.querySelector('Data');

    display.forEach(row => {
        const tr  = document.createElement('tr');
        tr.innerHTML = `
        
        <td>${row.id}</td>
        <td>${row.name}</td>
        <td>${row.surname}</td>
        
        `;
    });
}

