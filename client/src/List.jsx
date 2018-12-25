import React from 'react';
import ListEntry from './ListEntry.jsx';

let List = props => (
    <div>
        {props.news.map((article, index)=><ListEntry article={article} key={index}/>)}
    </div>
)

export default List;