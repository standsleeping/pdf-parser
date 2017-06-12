const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())

let PDFParser = require("pdf2json")
let pdfParser = new PDFParser(this,1)

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError))
pdfParser.on("pdfParser_dataReady", pdfData => {})

pdfParser.loadPDF("./SampleResume.pdf")

app.post('/', function (req, res) {
  // pry = require('pryjs')
  // eval(pry.it)
  res.send({text: text})
})

app.listen(4567, function () {
  console.log('Listening on port 4567.')
})
