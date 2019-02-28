import { ContentManagementClient } from 'kentico-cloud-content-management';
import { projectId, apiKey } from '../config';


const client = new ContentManagementClient({
  projectId: projectId,
  apiKey: apiKey
});

client.viewAsset()
  .byInternalId('0270ea18-4842-4d09-9570-17b41bb37e2d')
  // .byExternalId('which-brewing-fits-you')
  .toObservable()
  .subscribe((response) => {
    console.log(response);
  },
    (error) => {
      console.log(error);
    });