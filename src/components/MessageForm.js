import React, {useState} from 'react';
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const CREATE_MESSAGE = gql`
  mutation CreateMessage($title: String!, $content: String!, $author: String!){
    createMessage(title: $title, content: $content, author: $author){
      _id
    }
  }
`;

const MessageList = () => {

  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const [createMessage] = useMutation(CREATE_MESSAGE)

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMessage({variables: {title, author, content}})
    window.location.href="/"
  }

  const handleOnchangeAuthor = (e) => {
    setAuthor(e.target.value)
  }
  const handleOnchangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleOnchangeContent = (e) => {
    setContent(e.target.value)
  }
      


  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  value={author}
                  type="text" 
                  placeholder="Author" 
                  className="form-control" 
                  onChange={handleOnchangeAuthor} 
                />
              </div>
              <div className="form-group">
                <input 
                  value={title}
                  type="text" 
                  placeholder="Write a Title" 
                  className="form-control"
                  onChange={handleOnchangeTitle} 
                />
              </div>
              <div className="form-group">
                <textarea 
                  value={content}
                  rows="2" 
                  placeholder="Content..." 
                  className="form-control" 
                  onChange={handleOnchangeContent}
                >
                </textarea>
              </div>
              <button className="btn btn-success btn-block">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageList;