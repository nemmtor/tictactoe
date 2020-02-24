import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import { changeStateAfterDelay } from 'utils';

const Intro = ({ setIntroFinished }) => {
    useEffect(() => {
        changeStateAfterDelay(setIntroFinished, true, 6000);
    });
    return (
        // Classnames of wrapper and cursor has to be defined in global css
        <Typewriter
            options={{
                wrapperClassName: 'writer__text',
                cursorClassName: 'writer__cursor',
            }}
            onInit={typewriter => {
                typewriter
                    .changeDeleteSpeed(25)
                    .changeDelay(75)
                    .typeString('Best game of 2020.')
                    .pauseFor(250)
                    .deleteAll()
                    .typeString('Said nobody.')
                    .start();
            }}
        />
    );
};

Intro.propTypes = {
    setIntroFinished: PropTypes.func.isRequired,
};

export default Intro;
