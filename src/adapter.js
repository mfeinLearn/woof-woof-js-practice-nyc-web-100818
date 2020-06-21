class Adapter { // Will do all of our request in the back end
    constructor(baseURL) {
        this.baseURL = baseURL
    }
    // the default for a fetch is a GET
    // Just makes a GET request to a URL
    get(path) {
        return fetch(path).then(res => res.json())
    }
    getDoggos() {
        // if you dont return a promise you cant .then off of it
        return this.get(this.baseURL)
    }

    getSpecificDoggo(id) {
        // this.getDoggos().then(dogs => dogs.find(dog => (dog.id === id)))
        return this.get(`${this.baseURL}/${id}`)
    }
}

// we need to return

// start 31:23
