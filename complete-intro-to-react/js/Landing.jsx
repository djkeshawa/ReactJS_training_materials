import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchTerm, resetSearchTerm } from './actionCreators';

class Landing extends React.Component {
    goToSearch = (event)=>{
        event.preventDefault();
        this.props.history.push('/search');
    }
    log = () => {
        console.log("submit works");
    };
    render() {
        return (<div className="landing">
            <h1>svideo</h1>
            <form onSubmit={this.goToSearch}>
            <input onChange={this.props.handleSearchTermChange} value={this.props.searchTerm} type="text" placeholder="Search" />
            </form>
            <Link to="/search" onClick={this.props.clearSearchTerm}> or Brows All </Link>
        </div>);
    }
}

// const Landing = (props) => {
//     return(
//         <div className="landing">
//         <h1>svideo</h1>
//         <input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search"/>
//         <Link to="/search"> or Brows All </Link>
//         </div>
//     );
//   }

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
// this dispatch actions into redux
// the returning formated action from actionCreator will be dispatch into rooReducer
const mapDispatchToProps = dispatch => ({
    handleSearchTermChange(event) {
        dispatch(setSearchTerm(event.target.value));
    },
    clearSearchTerm(){
        dispatch(resetSearchTerm(""))
    }
});
// what connect method does is that taking objects and injecting them in to redux, so we can access them as props.
export default connect(mapStateToProps, mapDispatchToProps)(Landing);