let BASE_URL = "https://calendarific.com/api/v2/holidays?api_key=WopLUsKOTqtU1OgLhlVMJqVymWCMcX9d";
// console.log(BASE_URL);
let dropDown = document.querySelectorAll(".dropdowen select");
// console.log(dropDown);
let flag = document.querySelector("#flag");

// console.log(flag.value);
let dateInput = document.getElementById("n1");
// console.log(dateInput);
let button = document.getElementById("btn");
// console.log(button);
let table1 = document.getElementById("table");
// console.log(table1);

button.addEventListener("click", async (evt) => {
    // console.log(button);
    evt.preventDefault();
    // const URL = `${BASE_URL}/${dropDown.value}/${dateInput}`;
    // console.log(URL);
    // let response = await fetch(URL);
    // let  data = await response.json();
    // console.log(data);
   let newFlag = flag.value;
//    console.log(newFlag);
    let newDateInput = dateInput.value;
    const URL = `${BASE_URL}&country=${newFlag}&year=${newDateInput}`;
    console.log(URL);
    let response = await fetch(URL);
    let  data = await response.json();
    console.log(data);
    let holidays = data.response.holidays;
    // holidays.forEach((holiday) => {
    //     console.log(holiday);
    // })
    // clear();
    clearSearch();
    holiday(holidays);
    // holiday.remove();
   
    
})

function clearSearch(){
    // let div = document.getElementById("someId");
    if(table1 !== null) {
        document.getElementById("table").remove();
    }
        
}

for(code in countryList){
    // console.log(code, countryList[code]);
}

for(let select of dropDown){
    countryList.forEach( (country) => {
        // console.log(country);    
        let newOption = document.createElement("option");
        newOption.innerText = country.country_name;
        newOption.value = country["iso-3166"];
        newOption.selected = "selected";
        select.append(newOption);
        

    })
}
// function clear(){
//     if( !== null){
//         .remove();
//     }
    
// }


function holiday(holidays){
    // const div = document.createElement("div");
    // div.classList.add("box");
    // document.body.appendChild(div);
    const table1 = document.createElement("table");
    table1.setAttribute('id', "table");
    document.body.appendChild(table1);
    holidays.forEach((holiday)  => {
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        cell1.textContent = holiday.name;
        cell1.classList.add("name");
        let cell2 = document.createElement("td");
        cell2.textContent = holiday.date.iso;
        cell2.classList.add("date");
        row.appendChild(cell1);
        row.appendChild(cell2)
        table1.appendChild(row);
        // console.log(holiday);
    })
    // console.log(holidays);
}



// for(let select of dropDown){
//     for(currCode in countryList){
//         let newOption = document.createElement("option");
//         newOption.innerText = currCode;
//         newOption.value = currCode;
//         newOption.selected = "selected";
//         // console.log(newOption)
//         select.append(newOption); 
//     }
   
//     select.addEventListener("change", (evt) => {
//         updateFlag(evt.target);
//     })
    
// }
// const updateFlag = (element) => {
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// }
