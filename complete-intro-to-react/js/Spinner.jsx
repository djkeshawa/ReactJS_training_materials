import React from 'react';
import styled ,{keyframes} from 'styled-components';

// This is how we make keyFrame components with styled components
const spin = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const Image = styled.img`
    animation:${spin} 4s infinite linear;
`;

const Spinner = () => <Image src = '/public/img/loading.png' alt='loading indicatior'/>;

export default Spinner;