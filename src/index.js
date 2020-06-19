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

    }

})
