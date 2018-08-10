import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
    width: 32%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom:25px;
    padding-right:10px;
    overflow:hidden;
    color:black;
    text-decoration:None
`;

const Image = styled.img`
    width: 46%;
    float: left;
    margin-right; 10px;
`;

class ShowCards extends Component {
    shouldComponentUpdate(){
        // once the component have rendered for the first time, never update it.
        return false;
    }
    render() {
        return (
            <Wrapper className='show-card' to={`/details/${this.props.imdbID}`}>
                <Image alt={`${this.props.title} show poster`} src={`/public/img/posters/${this.props.poster}`} />
                <div>
                    <h3>{this.props.title}</h3>
                    <h4>({this.props.year})</h4>
                    <p>{this.props.description}</p>
                </div>
            </Wrapper>
        );
    }
}

// can use propstypes to check 
ShowCards.propTypes = {
    // here shape is a object
    // show: shape({
    //     // if we avoid putting isRequired, it will not give a error in a absence of that attribute
    //     poster: string.isRequired,
    //     title: string.isRequired,
    //     year: string.isRequired,
    //     description: string.isRequired,
    // }).isRequired

    // after spread operator used
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
}

export default ShowCards;