import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import spinner from '../spinner1.gif';
import axios from 'axios'

function Article(props) {
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');
    const [authorname, setAuthorname] = useState('');

    useEffect(() => {
        axios.get(`/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthorname(res.data.authorname)
        ])
        .catch(error => console.log(error));
    }, [props])
    return (
        <MainContainer>
            {!title || !article || !authorname ?
            ( <img src={spinner} alt="loading..." /> 
            ):(
             <> 
            <h2>{title}</h2>
            <p>{article}</p>
           <p className="badge badge-secondary">{authorname}</p>
           <br/>
           <Link to='/' type="submit" className="btn btn-primary">
            Back to Home
           </Link>
           </>
            )}
        </MainContainer>
    )}

export default Article
// Main container styling

const MainContainer = styled.div`
  margin: 6rem auto;
  padding: 3rem 14rem;

  h2 {
      text-align: center;
      font-weight: 900;
      color: var(--dark-green);
  }
  img {
      width: 4rem;
      display: block;
      padding: auto;
  }

  .btn-primary{
    background: var(--dark-green);
    border: none;
    &:hover{
        background: var(--light-green)
    }
}
`;