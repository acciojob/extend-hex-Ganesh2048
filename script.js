const extendHex = (shortHex) => {
  // write your code here
	let i=shortHex.length-3,c=false;
	let o="#";
	while (i<shortHex.length) {
		let t=shortHex[i].charCodeAt[0];
		if (t>=65 && t<=90) {
			c=true;
		}
		output+=shortHex[i]+shortHex[i];
		i++;
		
	}
	return c?;output.toUpperCase();output;
};

// Do not change the code below.
//const shortHex = prompt("Enter Short Hex.");
//alert(extendHex(shortHex));
