import { ContentManagementClient } from 'kentico-cloud-content-management';
import { projectId, apiKey } from '../config';

const client = new ContentManagementClient({
  projectId: projectId,
  apiKey: apiKey
});

client.addAsset()
  .withData(
    {
      fileReference: {
        id: 'd39a3e33-f074-4276-bdb8-6df6ee2b1b4c',
        type: 'internal'
      },
      title: 'cat',
      externalId: 'blafr',
      descriptions: [
        {
          language: {
            codename: 'en-US'
          },
          description: 'Sad cat'
        },
        {
          language: {
            codename: 'en-US'
          },
          description: 'Le Sad cat'
        }
      ]
    }
  )
  .toObservable()
  .subscribe((response) => {
    console.log(response);
  },
    (error) => {
      console.log(error);
    });