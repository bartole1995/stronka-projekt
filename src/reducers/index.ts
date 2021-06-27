import { combineReducers } from 'redux';
import photos, { IImageReducer } from './imageReducers';

import users, { IUsersReducer } from './usersReducers';

import posts, { IPostsReducer } from './postsReducers';

import comments, { ICommentsReducer } from './commentsReducers';

import website, { IWebsiteReducer } from './websiteReducer';

export const rootReducer = combineReducers({
    users,
    photos,
    posts,
    comments,
    website
})


export interface IState {
    state: any;
    [x: string]: any;
    users: IUsersReducer,
    photos: IImageReducer,
    posts: IPostsReducer
    comments: ICommentsReducer,
    website: IWebsiteReducer
}