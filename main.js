async function sendApiRequest() {
    // let api_key = 'UIs9QfJgegWToKSrlAr3FjUvL3QjgDhjplaYDBJO'
    let url = 'https://localhost:44327/Home/';
    let NamePhoto = document.getElementById('Name').value.toString()
    let count = document.getElementById('count').value.toString()

    let flag
    let endUrl
    if (count != 0) {
        flag = 'count'
        endUrl = url + 'Count/' + count;
    } else {
        flag = 'Name'
        endUrl = url + 'GetName/' + NamePhoto;
    }
    if (Name == "") {
        flag = "AllData";
        endUrl = url;
    }

    let response = await fetch(endUrl)
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data, flag)
}
let stringName = "hello"
let stringDesc = "hello"
async function sendApiRequest2() {
    // let api_key = 'UIs9QfJgegWToKSrlAr3FjUvL3QjgDhjplaYDBJO'
    let url = 'https://localhost:44327/Home/';
    let response = await fetch(url)
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data, "count")
}
async function useApiData(data, flag) {
    let checkMain = document.getElementsByClassName('Main')
    if (checkMain[0] != null) {
        document.body.removeChild(checkMain[0]);
    }
    let mainDiv = document.createElement('div');
    mainDiv.className = "Main";
    document.body.appendChild(mainDiv);
    if (flag == 'Name') {

        let url = data.url
        let div = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        div.className = "Pictures";
        div3.innerHTML = data.name
        div.innerHTML = data.description
        div2.innerHTML = data.date
        var x = document.createElement("IMG");
        x.className = 'Pics';
        x.setAttribute("src", url);
        x.setAttribute("width", "480");
        x.setAttribute("height", "240");
        x.setAttribute("alt", "ANY IMG");
        mainDiv.appendChild(x);
        mainDiv.appendChild(div3);
        mainDiv.appendChild(div);
        mainDiv.appendChild(div2);
    } else {
        data.forEach(function (item, i, data) {

            let url = data[i].url
            let div = document.createElement('div');
            let div2 = document.createElement('div');
            let div3 = document.createElement('div');
            let button = document.createElement('button');
            let form = document.createElement('form');
            let input = document.createElement('input');
            input.type = "text";
            input.hidden = "hidden"
            input.value = data[i].id;
            button.className = "btn btn-primary";
            button.textContent = "Delete";
            button.type = "button";
            button.onclick = () => {
                var url = "https://localhost:44327/Home/Delete?id=" + input.value;

                var xhr = new XMLHttpRequest();
                xhr.open("DELETE", url);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        console.log(xhr.status);
                        console.log(xhr.responseText);
                    }
                };

                xhr.send();
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            };

            div.className = "Pictures";
            input1 = document.createElement('input');
            input2 = document.createElement('input');
            input3 = document.createElement('input');
            input1.value = data[i].name
            input2.value = data[i].description
            input3.value = data[i].date
            input1.type = "text"
            input2.type = "text"
            input3.type = "datetime"
            input1.name = "Name"
            input2.name = "Description"
            input3.name = "Date"
            input1.className = "form-control"
            input2.className = "form-control"
            input3.className = "form-control"
            input1.id = "1-" + i
            input2.id = "2-" + i

            div3.appendChild(input1)
            div.appendChild(input2)
            div2.appendChild(input3)
            let button2 = document.createElement('button');
            button2.className = "btn btn-primary";
            button2.textContent = "Put";
            button2.type = "button";
            
            button2.onclick = () => {
                let inp1 = document.getElementById("1-"+ i).value
                let inp2 = document.getElementById("2-"+ i).value
                var url = "https://localhost:44327/Home/Put?id=" + input.value + "&name=" + inp1 + "&description=" + inp2

                var xhr = new XMLHttpRequest();
                xhr.open("PUT", url);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        console.log(xhr.status);
                        console.log(xhr.responseText);
                    }
                };

                xhr.send();
                 setTimeout(() => {
                      window.location.reload()
                  }, 1000);
            };

            var x = document.createElement("IMG");
            x.className = 'Pics';
            x.setAttribute("src", url);
            x.setAttribute("width", "480");
            x.setAttribute("height", "240");
            // x.setAttribute("alt", "NASA IMG");
            mainDiv.appendChild(x);
            mainDiv.appendChild(div3);
            mainDiv.appendChild(div);
            mainDiv.appendChild(div2);
            mainDiv.appendChild(input)
            mainDiv.appendChild(button)
            mainDiv.appendChild(button2)

            mainDiv.appendChild(document.createElement("br"));
            mainDiv.appendChild(document.createElement("hr"));

        })



    }
}
