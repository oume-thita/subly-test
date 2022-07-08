import styled from "styled-components";

export const Wrap = styled.section`
    display: inline-block;   
    justify-content: center;

    .cart-info{
        display: block;
        margin: 10px;
    }

    .cart-container {
        position: relative;
        height: 300px;
        width: 400px;
        background-color: white;
        margin: 15px;
        color: black;
        border-radius: 5px;
        box-shadow:  1px 1px 15px;

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

        .img {
            position: relative;
            height: 75%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 5px 5px 0px 0px;
        }
    }

`