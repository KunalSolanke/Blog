import React from 'react'
import Bloglayout from '../Layout/BlogLayout' 
import Editor from '../component/Editor/Editor'


function CreatePost() {
    return (
        
        <Bloglayout>
            <div className="content">
                <div className ="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-12 md:col-start-2 md:col-end-11">
                        <h5>Create New Post</h5>
                        <div className="editor">
                            <Editor />
                        </div>
                        <div className="text-right mt-4">
                            <buttonn type="submit" className="bg-green-400 rounded-full py-2 px-4">Create Post</buttonn>
                        </div>
                    </div>
                </div>
            </div>
            
        </Bloglayout>
    )
}

export default CreatePost
