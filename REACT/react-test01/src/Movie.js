import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        console.log(this.props);
       return(
           <div>
               <MoivePoster />
               <h1>{this.props.title}</h1>
           </div>
       );
    }
}

class MoivePoster extends Component{
    render(){
        return(
            <img src="https://search1.daumcdn.net/thumb/C160x200/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcontentshub%2Fsdb%2Fadaf83a737377f7a812b181c1ef99124a26c6f4f05516d70688502c536cfb8ed" alt="" />
        );
    }
}

export default Movie;