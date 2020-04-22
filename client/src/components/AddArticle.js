import React, {useState}  from 'react'
import styled from 'styled-components';

function AddArticle() {
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');
    const [authorname, setAuthorname] = useState('');
    return (
        <AddArticleContainer>
        <div className="container">
            <h1>Add Article</h1>
        <form>
     <div className="form-group">
       <label htmlFor="authorname">Author Name</label>
       <input type="text" className="form-control" placeholder="Author Name" />
    </div>
    <div className="form-group">
     <label htmlFor="title">Title</label>
     <input type="text" className="form-control" placeholder="Title" />
   </div>
   <div className="form-group">
    <label htmlFor="article">Article</label>
    <textarea className="form-control" rows="3"></textarea>
  </div>
     <button type="submit" className="btn btn-primary">Submit</button>
 </form>
 </div>
</AddArticleContainer>
    )
}

export default AddArticle

// css for addarticles

const AddArticleContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 31.25rem;

  h1{
      font-weight:900;
      color: var(--dark-green);
  }

  .btn-primary{
      margin-top: 2rem;
      background: var(--dark-green);
      border: none;
      &:hover{
          background: var(--light-green)
      }
  }
`;
