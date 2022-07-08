import React, { useEffect, useState } from "react";
import { fetchMedia } from "../api";
import Card from "../components/Card";
import { IMedium } from "../types";

// interface IProps {
//     medium: IMedium[];
// }

const HomePage = () => {
    const [mediums, setMedium] = useState<IMedium[]>([]);

    const getMedia = async () => {
        const data = await fetchMedia()
        setMedium(data)
    }
    useEffect(() => {
        getMedia()
    }, [])

    return(
        <div>
            {mediums?.map((m) => {
                return <Card key={m.id} medium={m} />
            })}
        </div>        
    )
}

export default HomePage