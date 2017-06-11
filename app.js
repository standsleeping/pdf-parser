const express = require('express')
const app = express()

let PDFParser = require("pdf2json")
let pdfParser = new PDFParser(this,1)

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError))
pdfParser.on("pdfParser_dataReady", pdfData => {})

pdfParser.loadPDF("./SampleResume.pdf")

app.get('/', function (req, res) {
  text = pdfParser.getRawTextContent()
  res.send(text)
})

app.listen(4567, function () {
  console.log('Listening on port 4567.')
})
