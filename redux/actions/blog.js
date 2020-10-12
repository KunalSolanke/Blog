import * as actionTypes from './actionTypes'

export const createBlogSuccess = (blogname,blogimage,bloglogo,coauthors,about) =>{
    return {
        type :actionTypes.CREATE_BLOG_START ,
        blogname :blogname ,
        blogimage : blogimage,
        bloglogo : bloglogo,
        coauthors : coauthors ,
        about : about
    }
}