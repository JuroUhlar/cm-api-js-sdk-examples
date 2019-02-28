const KenticoCloud = require('kentico-cloud-content-management');

const config = require('../config');
const projectId = config.projectId;
const apiKey = config.apiKey;

const fs = require('fs');

const client = new KenticoCloud.ContentManagementClient({
  projectId: projectId,
  apiKey: apiKey
});

var data = fs.readFileSync('cat.jpg');

// var binaryText = new Buffer(data, 'binary');
console.log(data.byteLength);

client.uploadBinaryFile()
  .withData({
    binaryData: data,
    contentLength: data.byteLength,
    contentType: 'image/jpg',
    filename: 'cat.jpg'
  })
  .toObservable()
  .subscribe((response) => {
    console.log(response);
  },
    (error) => {
      console.log(error);
    });