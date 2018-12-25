import React from 'react';
import axios from 'axios';
import List from './List.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            articles:[]
        }
    }

    componentDidMount(){
        axios
        .get('/news')
        .then((response)=>{
            console.log('this is the data', response.data.articles)
            this.setState({
                articles: response.data.articles
            })
        })
        .catch(err=>console.log(err))
    }

    render(){
        return(
            <div>
                <h1>TechNewsTakeHome.com</h1>
                <div>
                <List news={this.state.articles}/>
                </div>
            </div>
        )
    }
}

export default App;