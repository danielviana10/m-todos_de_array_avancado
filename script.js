let users = ["samuel", "júlia", "Camila", "João"]
console.log(users.toString())
console.log(users.join('/'))


const employeeBonus = [12, 14, 16, 24]
const currentEmployeeBonus = employeeBonus.map((num) => { return num * 2 })
console.log(currentEmployeeBonus)

const valuesGreaterThanThirty = currentEmployeeBonus.filter((num) => {return num > 30})
console.log(valuesGreaterThanThirty)

const bonusSum = currentEmployeeBonus.reduce((previousValue, currentValue)=> { 
    return currentValue + previousValue 
}, 5)
console.log(bonusSum)