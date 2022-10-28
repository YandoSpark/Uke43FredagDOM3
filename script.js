const randomnumber = Math.round(Math.random() * 100)

const numberinput = document.querySelector("#numberinput")
const checkbutton = document.querySelector("#setnumber")
const numbertext = document.querySelector("#numbertext")

const random = document.querySelector("#randomnumber")
random.addEventListener("click", function() {
    
    number = Math.round(Math.random() * 100)
    if (number == randomnumber) {
        window.alert = ("du var heldig")
    }
    else {
        numbertext.innerHTML = ( number + " er feil du var ikke heldig")
    }
})


checkbutton.addEventListener("click", function() {


    number = numberinput.value 

    if (number == randomnumber) {
        window.alert("Tallet var: " + randomnumber + ". Gratulerer!" )
      }
      else if (number > randomnumber) {
        numbertext.innerHTML = ("Skriv en tall mindre en " + number) 
      }
      else if (number < randomnumber) {
        numbertext.innerHTML = ("Skriv en tall storre en " + number)
      }
      else {
        numbertext.innerHTML = ("Prøv igjen")
}
})

i