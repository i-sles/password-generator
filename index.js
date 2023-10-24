const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
 
let passwordLength = 12
let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let generateBtn = document.getElementById("generate-btn")

let clipBoard = navigator.clipboard

generateBtn.addEventListener("click", function () {
    password1El.textContent = getPassword()
    password2El.textContent = getPassword()
})

password1El.addEventListener("click", async function() {
   try {
        await copy(password1El.textContent);
    } catch(e) {
        console.error(e);
    }
})

password2El.addEventListener("click", async function() {
    try {
        await copy(password2El.textContent);
    } catch(e) {
        console.error(e);
    }
})

function getPassword() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        password += characters[Math.floor(Math.random()*characters.length)]
    }
    return password
}

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

const generatedPasswordOne = generateRandomPassword()

console.log("Here is a random password: ", generatedPasswordOne)




