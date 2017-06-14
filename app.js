const uuidV4 = require('uuid/v4')
const express = require('express')
const app = express()

var cors = require('cors')
app.use(cors())

// var bodyParser = require('body-parser')
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

let PDFParser = require("pdf2json")
let pdfParser = new PDFParser(this,1)
var formidable = require('formidable')
var http = require('http')
var util = require('util')

function process_request(req, res) {

  var form = new formidable.IncomingForm()
  form.parse(req)

  form.on('fileBegin', function (name, file){
    file.path = __dirname + '/uploads/' + file.name
  })

  form.on('file', function (name, file){
    pdfParser.loadPDF(file.path)
  })

  pdfParser.on("pdfParser_dataReady", pdfData => {
    rawTextContent = pdfParser.getRawTextContent()
    res.send({rawTextContent: rawTextContent})
  })
}

app.post('/', process_request)

app.listen(4567, function () {
  console.log('Listening on port 4567.')
})
