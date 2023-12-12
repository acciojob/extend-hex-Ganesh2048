const extendHex = (shortHex) => {
  // write your code here
	let i=shortHex.length-3,c=false;
	let o="#";
	while (i<shortHex.length) {
		let t=shortHex[i].charCodeAt[0];
		if (t>=65 && t<=90) {
			c=true;
		}
		o+=shortHex[i]+shortHex[i];
		i++;
		
	}
	return c ? o.toUpperCase() : o;
};

// Do not change the code below.
//const shortHex = prompt("Enter Short Hex.");
//alert(extendHex(shortHex));
