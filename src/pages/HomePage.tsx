import React, { useEffect, useState } from "react";
import { fetchMedia } from "../api";
import { IMedium } from "../types";

const HomePage = () => {
    const [medium, setMedium] = useState<IMedium[]>([]);

    const getMedia = async () => {
        const data = await fetchMedia()
        setMedium(data)
    }
    useEffect(() => {
        getMedia()
    }, [])

    return(
        <div>
            {medium?.map((m) => {
                return <div>{m.name}</div>
            })}
        </div>
    )
}

export default HomePage