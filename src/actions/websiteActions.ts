import { Dispatch } from 'redux';
import { IWebsite } from '../entities/website';
import * as websiteTypes from './actionTypes/websiteTypes';

export const setWebsite = (e: [string,string]) => ((dispatch: Dispatch) => {
    return (
        dispatch({
            type: websiteTypes.SET_WEBSITE,
            payload: e

        })
    )
}) as any;






