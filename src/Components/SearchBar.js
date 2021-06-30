import React from 'react'

 export default class SearchBar extends React.Component{

    state={term:''}

    onFormChange = (event) => {
        this.setState({term:event.target.value});
        //console.log(this.state)
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term)
    };

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label htmlFor="srch">Search a Video</label>
                    <input
                     type="text"
                     id="srch"
                     className="ui field"
                     value={this.state.term}
                     onChange={this.onFormChange} />
                </form>
            </div>
        )
    }
 }