var str = '()()((';
var count = 0;
for(var i=0; i < str.length; i++) {
	if(str[i] ==="(") {
	    count++
	} else if (str[i]==")") {
	    count--
	}
}
console.log(count)