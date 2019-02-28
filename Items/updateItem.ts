import { ContentManagementClient } from 'kentico-cloud-content-management';
import { projectId, apiKey } from '../config';

const client = new ContentManagementClient({
  projectId: projectId,
  apiKey: apiKey
});

client.updateContentItem()
  // .byInternalId('f4b3fc05-e988-4dae-9ac1-a94aba566474')
  .byCodename('on_roasts')
  .withData(
    {
      name: 'On Roasts',
      sitemap_locations: [
        {
          codename: 'articles'
        }
      ],
    }
  )
  .toObservable()
  .subscribe((response) => {
    console.log(response);
  },
    (error) => {
      console.log(error);
    });