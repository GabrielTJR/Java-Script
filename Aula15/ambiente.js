let num = [5, 8, 9, 3, 6]
num.push(0)
num.sort()
console.log(num)
/*for(var c=0; c < num.length; c++){
    console.log(`Posição ${c} = ${num[c]}`)
}*/

for(let pos in num){
    console.log(`Posição ${pos} = ${num[pos]}`)
}

var ind = num.indexOf(5)
console.log(ind)