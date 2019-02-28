import { ContentManagementClient } from 'kentico-cloud-content-management';
import { projectId, apiKey } from '../config';
import { readFileSync } from 'fs'

const client = new ContentManagementClient({
  projectId: projectId,
  apiKey: apiKey
});

var data = readFileSync('cat.jpg');

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