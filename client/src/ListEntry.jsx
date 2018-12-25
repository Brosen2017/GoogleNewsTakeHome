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
                Url: {props.article.url}
           </div>
           <div>
                Published: {props.article.publishedAt}
           </div>
        </ul>
)

export default ListEntry;