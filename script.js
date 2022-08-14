let getData = document.getElementById('getData');

getData.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://fakestoreapi.com/products', true);

    xhr.onprogress = function () {
        console.log("I am progressing");
    }

    xhr.onreadystatechange = function () {
        console.log("ready state is " + xhr.readyState);
    }

    xhr.onload = function () {
        if (this.status === 200) {
            let objectData = JSON.parse(this.responseText);
            console.log(objectData);
            let tableData = document.getElementById('tableData');
            data = `
                <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
                `;
            for (value in objectData) {
                data += `
            <tr>
                <tb>${objectData[value].title}</tb>
                <tb>${objectData[value].price}</tb>
                <tb><img src="${objectData[value].image}" alt="${objectData[value].title}"></tb>
            </tr>
                `;
            }
            tableData.innerHTML = data;

        } else {
            console.log("Api link not found");
        }
    }
    xhr.send();
});