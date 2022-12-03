function detectPalindrome(num){
    let text=num.toString();
   // console.log(text)
    let rev_str='';
    for (let i=text.length-1;i>=0;i--){
        rev_str=rev_str+text[i];
    }
    if (rev_str==text){
        console.log("Yes")
    }else{
        console.log("No")
    }
  
}
