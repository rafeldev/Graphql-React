import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const GET_MESSAGES = gql`
    {
      messages{
      _id
      title
      content
      author
    }
    }
`;

const MessageList = () => {
  const { loading, error, data } = useQuery(GET_MESSAGES)
  if (loading) return <p>cargando mensajes...</p>
  if(error) {
    return <p>error...</p>
  }

  return (
    <div className="col-md-6 offset-md3">
      {
        data.messages.map(({_id, title, content, author}) => (
          <div className="card m-2" key={_id}>
            <div className="card-body">
              <h4>{title}</h4>
              <p>{content}</p>
              <p>{author}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
    
  
export default MessageList;