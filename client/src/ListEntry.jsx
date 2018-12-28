import React from 'react';


let ListEntry = props => (
        <ul>
           <h1>{props.article.title}</h1>
           <div>
                <img src={props.article.urlToImage}></img>
           </div>
           <div>
                Author: {props.article.author}
           </div>
           <div>
                Url: <a href={props.article.url}>Click here to read the article</a>
           </div>
           <div>
                Published: {props.article.publishedAt}
           </div>
        </ul>
)

export default ListEntry;