import styled from "styled-components";
import Button from "./Button";

export const Loading = styled.div`
    /* .loading-container{ */
        height: 20px;
        width: 75%;
        background-color: #e0e0de;
        border-radius: 50px;
        margin: 50px;
    /* } */
    
    .filler {
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
    display: inline-block;   
    justify-content: center;

    .cart-info{
        display: block;
        margin: 10px;
    }

    /* .cart-container:hover .img {
    opacity: 0.5;
    } */

    .card-status {
        position: relative;
        justify-content: center;
        height: 75%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 5px 5px 0px 0px;
    }

    .card-status.error {
        background-color: #FFD2D2;
        align-items: center;
    }

    .card-status.transcribing {
        opacity: 0.5;
    }

    .cart-container {
        position: relative;
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
`

export const Buttons = styled.button`
    border: 1px;
    border-radius: 50px;
`