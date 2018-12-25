import React from 'react';
import axios from 'axios';
import List from './List.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            articles:[]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        axios
        .get('/news')
        .then((response)=>{
            // console.log('this is the data', response.data.articles)
            this.setState({
                articles: response.data.articles
            })
        })
        .catch(err=>console.log(err))
    }

    handleClick(search){
        console.log(search)
        axios
        .post('/news', {search})
        .then((response)=>{
            // console.log(response)
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
                <span>Search Here:
                    <button onClick={()=>this.handleClick('Facebook')}>Facebook</button>
                    <button onClick={()=>this.handleClick('Okta')}>Okta</button>
                    <button onClick={()=>this.handleClick('Xactly')}>Xactly</button>
                    <button onClick={()=>this.handleClick('WeWork')}>WeWork</button>
                    <button onClick={()=>this.handleClick('8x8')}>8x8</button>
                    <button onClick={()=>this.handleClick('SynapseFI')}>SynapseFI</button>
                    <button onClick={()=>this.handleClick('Apptemize')}>Apptemize</button>
                    <button onClick={()=>this.handleClick('Uber')}>Uber</button>
                    <button onClick={()=>this.handleClick('Gusto')}>Gusto</button>
                    <button onClick={()=>this.handleClick('HelloSign')}>HelloSign</button>
                </span>
                <div>
                <List news={this.state.articles}/>
                </div>
            </div>
        )
    }
}

export default App;