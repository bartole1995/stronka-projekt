import { IWebsite } from '../../entities/website';

export const SET_WEBSITE = 'SET_WEBSITE';

export interface IWebsiteTypes {
    SET_WEBSITE: {
        currentWorkspace: [string, string];
    }
}