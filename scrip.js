let Array=["olma","oltin","banan","shaftoli",]

let oArray=[]

for (const meva of Array) {
    if(meva.includes("o")){
        oArray.push(meva)
    }
}


console.log("hamma mevallar",Array);
console.log("o harfi bor mevalar",oArray);