class Doggo { // WHAT DOES AN INDIVIDUAL DOG NEED TO DO
    // the idea here is you take each object that comes in and you are going to turn it into this dog
    //.. object with these special methods below that can do
    constructor(dog) {
        this.name = dog.name
        this.isGoodDog = dog.isGoodDog
        this.image = dog.image
        this.id = dog.id
        // we are going to be passing in the element of the array
        // the idea here is that you take each object that comes in and you are going to turn it into
        //.. this dog object with these special methods that we are going to write that can do everything that we want a dog to do
    }

    renderSpan() {
        const dogBar = document.querySelector()
        const dogSpan = document.createElement('span')
        dogSpan.innerText = pup.name
        dogBar.append(dogSpan)
    }
}
