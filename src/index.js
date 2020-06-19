document.addEventListener("DOMContentLoaded", () => {

    const allDogUrl = `http://localhost:3000/pups`

    fetchAllDogs()

    function fetchAllDogs() {
        fetch(allDogUrl)
        .then(res => res.json())
        .then(res => renderDogSpans(res))
        // .then(res =>{console.log(res)})
    }

    function renderDogSpans(arr){
        // this is a string and it is going to turn into HTML
        //.. know how to write HTML in a string
        console.log(arr)
        let str = ""
        arr.forEach(dog => str += `<span>${dog.name}</span>`)
        console.log(str);
        const dogBar = document.querySelector("#dog-bar")

        dogBar.innerHTML = str

        //---***other way - the appending way***---
        // if you are creating elements you need to append child
        // if you are creating a string you need to set the element that
        //.. is a string to the inner html of id of the element this case
        //.. it is the id of the div ^^seen above^^

        // const dogBar = document.querySelector(`#dog-bar`)
        // arr.forEach(dog => {
        //     let span = document.createElement("span")
        //     span.innerHTML = dog.name
        //     dogBar.appendChild(span)
        // })
                //---***other way***---

    }

})
