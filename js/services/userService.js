'use strict'

let gUserData

function formSubmit(userData){
    gUserData = userData
    _saveUserDataToStorage(userData)
    
}

function _saveUserDataToStorage() {
    return saveToStorage('userDB', gUserData)
}

function getUserData(){
    gUserData = loadFromStorage('userDB')
   console.log(gUserData); 
    if (!gUserData) return
    return gUserData
}