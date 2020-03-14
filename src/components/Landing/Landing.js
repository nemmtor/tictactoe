import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonLanding from './ButtonLanding';
import HeaderLanding from './HeaderLanding';

const LandingStyled = styled.section`
    padding: 1em;
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media (min-width: 480px) {
        font-size: 1.2em;
    }
`;

const Landing = ({ setGameStarted }) => {
    const [show, setShow] = useState(true);
    return (
        <LandingStyled>
            <HeaderLanding show={show} />
            <ButtonLanding
                setGameStarted={setGameStarted}
                show={show}
                setShow={setShow}
            />
        </LandingStyled>
    );
};

Landing.propTypes = {
    setGameStarted: PropTypes.func.isRequired,
};

export default Landing;
