##NOTES

- ways of appending to the dom:

1)
// if you are creating a string you need to set the element that
//.. is a string to the inner html of id of the element this case
//.. it is the id of the div ^^seen in index.js^^

2)
// if you are creating elements you need to append child seen below VVVV
// const dogBar = document.querySelector(`#dog-bar`)
// arr.forEach(dog => {
//     let span = document.createElement("span")
//     span.innerHTML = dog.name
//     dogBar.appendChild(span)
// })
        //---***other way***---

//------------------------------------------//
The use of dataset on span:
span.dataset.id = dog.id
same thing as the following:
```javascript
arr.forEach(dog => str += `<span data-id='${dog.id}'>
```
PATCH - updating a few specific thing
PUT - replaceing the entire object making an entire update
