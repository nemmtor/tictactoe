import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import ButtonLanding from './ButtonLanding';
import HeaderLanding from './HeaderLanding';

const LandingStyled = styled.main`
    padding: 1em;
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;

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
    const { colors, queries } = useContext(ThemeContext);
    const handleClick = () => {
        setGameStarted(true);
    };
    return (
        <LandingStyled queries={queries}>
            <HeaderLanding colors={colors} />
            <ButtonLanding
                colors={colors}
                queries={queries}
                handleClick={handleClick}
            />
        </LandingStyled>
    );
};

Landing.propTypes = {
    setGameStarted: PropTypes.func.isRequired,
};

export default Landing;
