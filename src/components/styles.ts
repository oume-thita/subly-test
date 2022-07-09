import styled from "styled-components";

export const Loading = styled.div`
        height: 20px;
        width: 75%;
        background-color: #e0e0de;
        border-radius: 50px;
        margin: 50px;
    
    .filler {
        display: flex;
        align-items: center;
        justify-content: left;
        height: 100%;
        background-color: purple;
        border-radius: inherit;
    }
    
    .label {
        padding: 5px;
        color: white;
        font-weight: bold;
        font-size:15px
    }
`

export const Wrap = styled.section`

    .cart-info{
        margin: 10px;
    }

    .card-status {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 75%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 5px 5px 0px 0px;
    }

    .card-status.error {
        background-color: #FFD2D2;
    }

    .card-status.transcribing {
        flex-direction: column;
        opacity: 0.5;
    }

    .card-container {
        display: block;

        height: 300px;
        width: 400px;
        background-color: white;
        margin: 15px;
        color: black;
        border-radius: 5px;
        box-shadow:  1px 1px 10px gray;

        h1 {
            font-size: 20px;
            color: black;
            margin: 0;
        }

        h2 {
            font-size: 18px;
            font-weight: 500;
            color: gray;
            margin: 0;
            text-transform: capitalize;
        }
    }

    .language {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 20px; left: 20px;
        height: 30px;
        width: 150px;
        border: 1px;
        border-radius: 10px;
        background-color: white;

    }
`

export const Buttons = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100px;    
    border: 1px;
    border-radius: 20px;
    background-color: white;
    
    p {
        text-align: center;
        font-size: 25px;
    }
`

export const Dropdowns = styled.div`
    height: 50px;
    width: 100px;    

    h1 {
        color: black;
    }
`