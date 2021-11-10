import styled, {keyframes} from 'styled-components'

export const draw = keyframes`
    100% {
        width: 100%;
    }
`

export const up = keyframes`
    100%{
        transform: translateY(0);
    }
`

export const RendererCon = styled.body`
    justify-content: center;
    background-color: #ece6cc;
    background-size: cover;
    height: 150rem;
`

export const Title = styled.div`
    border-bottom: 5px solid #000000;
    display: flex;
    font-size: 190px;
    font-family: "UUC";
    flex-direction: row;
    flex-wrap: wrap;
    float: center;
    justify-content: center;
    margin: auto auto;
    text-align: center;
    padding-top: 60px;
    position: relative;
    width: 40%;
    animation: up 500ms linear forwards;
    z-index: 1;

    &:before,
    &:after {
        position: absolute;
        content: '';
        width: 0px;
        height: 1px;
        left: 0;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: -1;
    }

    &:before {
        animation: draw 1000ms linear 5s forwards;
    }

    &:after {
        animation: draw 1000ms linear 5s forwards;
    }
`

export const LoginBtn = styled.div`
    /* border: 1px solid #000000; */
    background-color: #ffffff;
    border-radius: 10px;
    cursor: pointer;
    font-family: "Playfair";
    font-size: 55px;
    text-align: flex;
    padding-right: 0%;
    width: 40%;
    margin: 0 50px 0 0;

    &:hover {
        box-shadow: gray 2px 2px 2px;
    }
`

export const SignUpBtn = styled.div`
    /* border: 1px solid #000000; */
    background-color: #ffffff;
    border-radius: 10px;
    cursor: pointer;
    font-family: "Playfair";
    font-size: 55px;
    text-align: center;
    width: 40%;
    margin: 0 0 0 50px;

    &:hover {
        box-shadow: gray 2px 2px 2px;
    }
`

export const CliContainer = styled.div`
    display: flex;
    /* border: 1px solid #000000; */
    background-color: #ece6cc;
    float: center;
    justify-content: center;
    margin: auto;
    padding-top: 10%;
    width: 40%;
`

export const GuestContainer = styled.div`
    display: flex;
    background-color: #ece6cc;
    float: center;
    justify-content: center;
    margin: auto;
    padding-top: 10%;
`

export const GuestIntoBtn = styled.div`
    cursor: pointer;
    border-radius: 10px;
    font-family: "Playfair";
    font-size: 45px;
    text-align: center;

    &:hover {
        box-shadow: gray 2px 2px 2px;
    }
`

export const Prolougue = styled.div`
    border-bottom: 3px solid #000000;
    display: flex;
    font-size: 160px;
    font-family: "UUC";
    flex-direction: row;
    flex-wrap: wrap;
    float: left;
    justify-content: center;
    margin: auto auto;
    text-align: center;
    padding-top: 100px;
    position: relative;
`