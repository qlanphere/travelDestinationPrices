const selectDestination = (e) => {
    e.preventDefault();
    let form = document.querySelector('form');
    const destination =  {
        id: form.destination.value
        }
    console.log(destination)

    fetch(`http://localhost:3000/data/${destination.id}`)
    .then(r => r.json())
    .then(appendPrice)
    .catch(console.warn)

}


function appendPrice(data){
    let currentH = document.getElementById("first")
    if (currentH) {currentH.remove()}
    //console.log(data)
    const newH = document.createElement('h2');
    newH.setAttribute("id", "first")
    newH.textContent = `The price of a flight from London to ${data.location} is ${data.price}`
    const priceList = document.querySelector('#price');
    priceList.append(newH);
};

const form = document.getElementById('submit')
if (form) {
form.addEventListener('click', selectDestination)
}

module.exports = {
    appendPrice,
    selectDestination
}
