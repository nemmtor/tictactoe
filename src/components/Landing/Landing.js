import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import ButtonLanding from './ButtonLanding';
import HeaderLanding from './HeaderLanding';

const LandingStyled = styled.section`
    padding: 1em;
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;

    @media ${({ queries }) => queries.mobileM} {
        font-size: 1rem;
    }
    @media ${({ queries }) => queries.mobileL} {
        font-size: 1.2rem;
    }
    @media ${({ queries }) => queries.tablet} {
        font-size: 1.5rem;
    }
    @media ${({ queries }) => queries.laptop} {
        font-size: 1.6rem;
    }
    @media ${({ queries }) => queries.laptopL} {
        font-size: 1.9rem;
    }
`;

const Landing = ({ setGameStarted }) => {
    const { queries } = useContext(ThemeContext);
    // Pass down show state to animate unmounting both button and header after click
    const [show, setShow] = useState(true);
    return (
        <LandingStyled queries={queries}>
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
