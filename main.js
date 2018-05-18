// $.ajax("http://localhost:8088/chiles").then(
//     function (chiles) {
//         console.log(chiles);
//     }
// )




function newChile () {
    const chileName = document.getElementById("nameInput").value;
    const chileYear = document.getElementById("yearInput").value;

    const allChiles = $.ajax("http://localhost:8088/chiles").then(
        function (chile) {
            chile.forEach(
                function(chile) {


                    console.log(chile.name);
                }

            )

        }

    )
    console.log(allChiles)

    if (chileName === "" ||  chileYear === "") {
        alert("Must Fill in Name and Year");

    }
    // else if(allChiles.name === ) {

    // }


    else {

    $.ajax({
         url: "http://localhost:8088/chiles",
        method: "POST",
        data: {
                 "name": chileName,
                 "year": chileYear,
        }
    })
    .then(
        function (newFood) {
        console.log(newFood);
        }
    )
}
}

function deleteChile () {
    $.ajax({
        url: "http://localhost:8088/food/5",
        method: "DELETE"
})
}

const enterButt = document.getElementById("enterButton");
enterButt.addEventListener("click", newChile);