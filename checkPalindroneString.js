function checkPalindroneString(str){
    let name = str;
    let reverse = ""
    for(let i = str.length-1;i>=0;i--){
      reverse = reverse + str[i]
    }
    if(name === reverse){
        console.log("Yes,This is Palindrone")
    }else{
        console.log("No,This is not a Palindrone")
    }
    return reverse;
}
console.log(checkPalindroneString("hemant"))


function checkPalindroneStr(str) {
    const reversed = str.split("").reverse().join("");
    if (str === reversed) {
        console.log(`${str} → Yes, it's a palindrome`);
    } else {
        console.log(`${str} → No, it's not a palindrome`);
    }
}

checkPalindroneStr("hemant");
checkPalindroneStr("madam");
