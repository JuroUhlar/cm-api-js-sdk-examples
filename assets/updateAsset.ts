import { ContentManagementClient } from 'kentico-cloud-content-management';
import { projectId, apiKey } from '../config';

const client = new ContentManagementClient({
  projectId: projectId,
  apiKey: apiKey
});

client.updateAsset()
  .withData(
    {
      title: "Bla",
      assetId: '0270ea18-4842-4d09-9570-17b41bb37e2d',
      descriptions: [
        {
          language: {
            codename: 'en-US'
          },
          description: 'Sad sad sad cat'
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