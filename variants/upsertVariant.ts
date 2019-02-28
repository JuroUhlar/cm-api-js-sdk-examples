import { ContentManagementClient } from 'kentico-cloud-content-management';
import { projectId, apiKey } from '../config';


const client = new ContentManagementClient({
  projectId: projectId,
  apiKey: apiKey
});

client.upsertLanguageVariant()
  .byInternalId('f4b3fc05-e988-4dae-9ac1-a94aba566474')
  // .byCodename('on_roasts')
  // .byExternalId('59713')
  .forLanguageId('d1f95fde-af02-b3b5-bd9e-f232311ccab8')
  // .forLanguageCodename('es-ES')
  .withElements([
    {
      element: {
        codename: 'title'
      },
      value: 'En Asados'
    },
    {
      element: {
        codename: 'personas'
      },
      value: [
        {
          codename: 'barista'
        },
        {
          codename: 'coffee_blogger'
        }
      ]
    },
    {
      element: {
        codename: 'post_date'
      },
      value: '2014-11-07T00:00:00Z'
    },
    {
      element: {
        codename: 'summary'
      },
      value: 'Tostar granos de café puede tardar de 6 a 13 minutos. ...'
    },
    {
      element: {
        codename: 'related_articles'
      },
      value: [
        {
          codename: 'coffee_processing_techniques'
        },
        {
          codename: 'origins_of_arabica_bourbon'
        }
      ]
    },
    {
      element: {
        codename: 'meta_keywords'
      },
      value: 'asados, café'
    },
    {
      element: {
        codename: 'meta_description'
      },
      value: 'Tostar granos de café puede tardar de 6 a 13 minutos. ...'
    },
    {
      element: {
        codename: 'url_pattern'
      },
      value: 'on-roasts'
    }
  ])
  .toObservable()
  .subscribe((response) => {
    console.log(response);
  },
    (error) => {
      console.log(error);
    });