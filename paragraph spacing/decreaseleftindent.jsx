var myPara = app.selection[0].paragraphs[0];var leftIndent = parseInt(myPara.leftIndent);if (myPara.leftIndent !== 0) {	myPara.leftIndent = leftIndent-1;}