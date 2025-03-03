console.log("jambo");
console.log(30);
let number;
const favorite=Number(prompt("which number do you choose"));

 if(favorite>=20) {console.log("ypu are old enough");}
else console.log("you are too young");
function birthDate(birthyear){
return 2025-birthyear;
}
let years=[1992,1950,1340];
for(let i=0;i<years.length;i++){
    console.log(years[i]);
    console.log("The age of a person who was born in "+ years[i]+ " is " +birthDate(years[i]))
}

 