let fs = require('fs'),
    PDFParser = require("pdf2json");

let pdfParser = new PDFParser(this,1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    console.log('text', pdfParser.getRawTextContent())
    fs.writeFile("./SampleResume.txt", pdfParser.getRawTextContent());
});

pdfParser.loadPDF("./SampleResume.pdf");

text = pdfParser.getRawTextContent();

console.log('text', text)
