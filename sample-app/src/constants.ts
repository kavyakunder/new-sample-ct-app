// Make sure to import the helper functions from the `ssr` entry point.
import { entryPointUriPathToPermissionKeys } from '@commercetools-frontend/application-shell/ssr';

const newEntryPointUriPath = 'my-app-1';


export const entryPointUriPath =
    typeof window === 'undefined'
        ? process.env.ENTRY_POINT_URI_PATH || newEntryPointUriPath
        : newEntryPointUriPath;

export const PERMISSIONS = entryPointUriPathToPermissionKeys(entryPointUriPath);
