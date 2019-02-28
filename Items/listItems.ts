import { ContentManagementClient } from 'kentico-cloud-content-management';
import { projectId, apiKey } from '../config';


const client = new ContentManagementClient({
  projectId: projectId,
  apiKey: apiKey
});

client.listContentItems()
  .toObservable()
  .subscribe((response) => {
    console.log(response);
  },
    (error) => {
      console.log(error);
    });