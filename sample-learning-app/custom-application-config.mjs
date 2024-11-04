import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Sample Learning App',
  entryPointUriPath,
  cloudIdentifier: '${env:CLOUD_IDENTIFIER}',
  env: {
    development: {
      initialProjectKey: '${env:CTP_PROJECT_KEY}',
    },
    production: {
      applicationId: '${env:CUSTOM_APPLICATION_ID}',
    },
  },
  oAuthScopes: {
    view: [
      'view_stores',
      'view_key_value_documents',
      'view_products',
      'view_customer_groups',
    ],
    manage: ['manage_key_value_documents'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/files.svg}',
  mainMenuLink: {
    defaultLabel: 'Sample Learning App',
    uriPath: 'uploader',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'manager',
      defaultLabel: 'Sample Learning App',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
