alert("Welcome!");

var female = confirm("Are you a female?");

if(female){
    let name = prompt("Enter your name");
    document.writeln("Hello Madam. "+name+"welcome to my page");
}
else{
    let name = prompt("Enter your name");
    document.writeln("Hello Mr. "+name+"welcome to my page");
}