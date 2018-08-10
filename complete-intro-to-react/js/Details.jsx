import React, { Component } from 'react';
import Header from './Header';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import { getAPIDetails } from './actionCreators'
// this is a ajax client
import axios from 'axios';

class Details extends Component {
    componentDidMount() {
        // before refactoring 

        // axios.get(`http://localhost:3000/${this.props.show.imdbID}`)
        // .then(response =>{
        //     this.setState({apiData:response.data});
        // });

        // after refactoring 
        if (!this.props.rating) {
            this.props.getAPIData();
        }
    }
    render() {
        const { title, description, year, poster, trailer } = this.props.show;
        let ratingComponent;
        if (this.props.rating) {
            ratingComponent = <h3>{this.props.rating}</h3>
        } else {
            ratingComponent = <Spinner />
        }
        return (
            <div className="details">
                <Header />
                <section>
                    <h1>{title}</h1>
                    <h2>{year}</h2>
                    {ratingComponent}
                    <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
                    <p>{description}</p>
                </section>
                <div>
                    <iframe src={`https://www.youtube.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
                        allowFullScreen
                        title={`Trailer for ${title}`}
                    ></iframe>
                </div>
            </div>
        );
    }
}
// ownProps means the, props pass down from the parent 
const mapStateToProps = (state, ownProps) => {
    console.log(state.apiData)
    const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};
    return {
        rating: apiData.rating
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAPIData() {
        dispatch(getAPIDetails(ownProps.show.imdbID));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);