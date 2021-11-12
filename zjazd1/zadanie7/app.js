// Aplikacja wyświetlająca informację o zalogowanym użytkowniku systemu, przy użyciu modułu OS. Dodatkowo: zapis nazwy użytkownika do pliku na dysku.
const os = require('os')
const username = os.userInfo().username //take user name from system
console.log(username)
const fs = require('fs')
fs.writeFileSync('username.txt', username) //save user name in txt file on disc
