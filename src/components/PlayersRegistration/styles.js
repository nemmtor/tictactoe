import styled from 'styled-components';

const Styles = {
    RegistrationHeader: styled.header`
        font-size: 3rem;
        margin-bottom: 60px;
    `,
    FormStyled: styled.form`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: none;
        margin: 0;
        padding: 0;
    `,
    PlayerInputsGroup: styled.div`
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
    `,

    PlayerInputStyled: styled.input`
        width: 15rem;
        background: none;
        border: none;
        border-bottom: 1px solid white;
        padding: 2px;
        color: white;
    `,
    SubmitStyled: styled.input`
        width: 15rem;
        background: transparent;
        margin-top: 60px;
        color: white;
        cursor: pointer;
        text-transform: uppercase;
    `,
};

export default Styles;
