import React from "react";
import { IMedium } from "../types";
import { Wrap } from "./styles";

interface CardProps {
    medium: IMedium
}

const Card: React.FC<CardProps> = ({medium}: CardProps) => {
    const {
        name,
        cover,
        languages,
        status,
        errorMessage
    } = medium;

    return (
        <Wrap>
            <div className="cart-container">
                {status==='error' && (
                    <div className="img">{errorMessage}</div>
                )}
                {status==='transcribing' && (
                    <div className="img">transcribing</div>
                )}
                {status==='ready' && (
                    <div className="img" style={{ backgroundImage: `url(${cover})`}}/>
                )}
                <div className="cart-info">
                    <h1>{name}</h1>
                    <h2>{status}</h2>
                </div>
            </div>
        </Wrap>
        
        
    )
}

export default Card