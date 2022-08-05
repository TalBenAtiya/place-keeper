'use strict'

function onInit(){
    changeBkgAndTxtColor()
}

function onSubmitForm(ev, obj) {
    ev.preventDefault()
    const elInputs = obj.querySelectorAll('input')
    const userPrefrences = Array.from(elInputs).map(el => { return  {[el.name]: el.value } })
    console.log(userPrefrences)
    formSubmit(userPrefrences)
    changeBkgAndTxtColor()
}

function changeBkgAndTxtColor() {
    const userData = getUserData()
    document.querySelector('body').style.backgroundColor = userData[4]['bkg-color']
    document.querySelector('body').style.color = userData[5]['txt-color']
}

