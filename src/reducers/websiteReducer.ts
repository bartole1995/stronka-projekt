import { IWebsite } from '../entities/website';
import * as websiteTypes from '../actions/actionTypes/websiteTypes';

export interface IWebsiteReducer {
    currentWorkspace: [string, string]
}

const defaultState = (): IWebsiteReducer => ({
    currentWorkspace: ["", ""]
});

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case websiteTypes.SET_WEBSITE: {
            return {
                ...state,
                currentWorkspace: action.payload
            }
        }

        default: {
            return state
        }
    }
}