import { ContentManagementClient } from 'kentico-cloud-content-management';
import { projectId, apiKey } from '../config';

const client = new ContentManagementClient({
  projectId: projectId,
  apiKey: apiKey
});

client.addContentItem()
  .withData(
    {
      name: 'On Roasts test',
      type: {
        codename: 'article'
      },
      sitemap_locations: [
        {
          codename: 'articles'
        }
      ],
      external_id: '59714'
    }
  )
  .toObservable()
  .subscribe((response) => {
    console.log(response);
  },
    (error) => {
      console.log(error);
    });