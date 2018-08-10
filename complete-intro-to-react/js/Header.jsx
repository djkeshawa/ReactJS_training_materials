import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setSearchTerm} from './actionCreators';

const Header =(props)=>{
    let utilSpace;
    console.log(props.showSearch)
    if(props.showSearch){
        utilSpace = (<input onChange={props.handleSearchTermChange}
        value={props.searchTerm}
         type="text" 
         placeholder="Search" />);
    }else{
        utilSpace = (<h2><Link to='/search'>Back</Link></h2>);
    }
    return(
    <header>
        <h1><Link to="/">svideo</Link></h1>
        {utilSpace}
    </header>
    );
};
const mapStateToprops = state => ({searchTerm:state.searchTerm});
const mapDispatchToProps = dispatch => ({
    handleSearchTermChange(event){
        dispatch(setSearchTerm(event.target.value));
    }
});

export default connect(mapStateToprops,mapDispatchToProps)(Header);