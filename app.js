const express = require('express')
const app = express()

var cors = require('cors')
app.use(cors())

// var bodyParser = require('body-parser')
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// let PDFParser = require("pdf2json")
// let pdfParser = new PDFParser(this,1)
//
// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError))
// pdfParser.on("pdfParser_dataReady", pdfData => {
//   fs.writeFile("./content.txt", pdfParser.getRawTextContent());
// })
// pdfParser.loadPDF("./SampleResume.pdf")

var formidable = require('formidable')
var http = require('http')
var util = require('util')

function process_request(req, res) {
  var form = new formidable.IncomingForm();

  form.parse(req);

  form.on('fileBegin', function (name, file){
      file.path = __dirname + '/uploads/' + file.name;
  });

  form.on('file', function (name, file){
      console.log('Uploaded ' + file.name);
  });

  res.writeHead(201)
  res.end()
}

app.post('/', process_request)

app.listen(4567, function () {
  console.log('Listening on port 4567.')
})
