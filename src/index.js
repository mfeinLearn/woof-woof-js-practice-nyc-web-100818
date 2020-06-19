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
        //span.dataset.id = dog.id
        arr.forEach(dog => str += `<span data-id='${dog.id}'>${dog.name}</span>`)
        console.log(str);
        const dogBar = document.querySelector("#dog-bar")
        // to be able to click on a dog's span we need to regester it by
        //.. having a event listener
        dogBar.addEventListener('click', handleSpanClick)
        dogBar.innerHTML = str

    }

    function handleSpanClick(e) {
        if (e.target.nodeName === "SPAN") {
            fetchDogProfile(e.target.dataset.id)
        }
    }

    function fetchDogProfile(id) {
        let pupMainURL = allDogUrl + `/${id}`
        fetch(pupMainURL)
        .then(res => res.json())
        .then(res => renderProfile(res))
    }

    function renderProfile(dog){
        //make sure to append each of those things
        //.. because they wont appear until they are appended
        //1) find the div
        //2) append it (each one of those elements I need to append to them)
        //#) YOU CANT DO:-> innerHTML= - because they are not strings
        const dogProfile = document.querySelector("#dog-info")
        dogProfile.innerHTML = ""
        // img src=dog_image_url>
        // <h2>Mr. Bonkers</h2>
        // <button>Good Dog!</button>
        let image = document.createElement("img") // I have created this
        image.src = dog.image// we are putting information inside of them. same as this -> <img src=dog_image_url> -> Giving it an attribute and just setting it to something that I already have in the dom
        // ^^ this is just in the air some where it is not doing anything until I append it to something. I need to get the parent div (dog-info div)
        // now I have the dog profile I can append it to dogProfile
        // dogProfile.appendChild(image)
        let heading = document.createElement("h2") // I have created this
        heading.innerText = dog.name
        // dogProfile.appendChild(heading)
        let goodButton = document.createElement("button") // I have created this
        // now I have to put information inside of them ^^^
        goodButton.dataset.id = dog.id
        if (dog.isGoodDog) {
            goodButton.innerText = "Good Dog!"
        } else {
            goodButton.innerText = "Bad Dog!"
        }
        goodButton.addEventListener('click', toggleGoodness)
        // console.log(dogProfile)
        // dogProfile.appendChild(goodButton)
        dogProfile.append(image,heading,goodButton)
    }
    // we need to change the database everytime we click
    //.. that button because we are going to update the dog's goodness as well
    function toggleGoodness(e){
        // console.log(e)
        if (e.target.innerText === "Good Dog!") {
            e.target.innerText = "Bad Dog!"
            patchDogGoodness(e.target.dataset.id, {isGoodDog: false})
        } else {
            // this is a great way to see oh I am changing the inner text but
            //.. I am also changing the back end so now they match.
            //.. Now the back end is still now keeping the single sorce of truth
            //.. of like what is happening in the front end. 
            e.target.innerText = "Good Dog!"
            patchDogGoodness(e.target.dataset.id, {isGoodDog: true})

        }
    }
    // when we send the request this is the data that we send into the backend
    // The **body** is actually the information that we are sending over
    function patchDogGoodness(id, data) {
        // if I need to know what was click how do I get that inforamtion?
        let pupMainURL = allDogUrl + `/${id}`
        fetch(pupMainURL, { // This is a fetch request this is happening when the broswer communicates with our back end.
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json'
          },
            body: JSON.stringify(data)     // body - we need to tell it what we are doing? we need to send info; this is what we want to do with it
        }).then(res => res.json()).then(console.log)
    }


})
