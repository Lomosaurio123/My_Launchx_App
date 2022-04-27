//Instanciamos a la clase MisionCommander 

const MissionCommander = require('./app/missionCommander')
const carlo = new MissionCommander("Carlo")
console.log(carlo.name)

const mau = new MissionCommander("Mauricio")
console.log(mau.name)

const jesus = new MissionCommander("Jesus")
console.log(jesus.name)

