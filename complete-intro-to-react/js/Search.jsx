import React from 'react';
import ShowCards from './ShowCards';
import Header from './Header';
import { connect } from 'react-redux';

const Search = props => {
    return (<div className='search'>
        <Header showSearch={true} />
        <div>
            {props.shows
                .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) > -1
                )
                .map(show => (
                    // <ShowCards show = {show}/> //we can use object spread operater specific to jsx to spread the show attributes and pass to showcards
                    <ShowCards key={show.imdbID} {...show} />
                ))}
        </div>
    </div>
    );
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });


// here we're not exporting a search, we're exporting a connected search
export default connect(mapStateToProps)(Search);
// this is the way to mitigate this problem
export const Unwrapped = Search;