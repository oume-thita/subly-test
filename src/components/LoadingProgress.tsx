import React from "react";
import {Loading} from './styles'

interface Props {
    progress: number;
  }

const LoadingProgress:React.FC<Props> = (props) => {
    const {progress} = props;

    return (
        <Loading>
            <div className="filler" style={{width: `${progress}%`}}>
            <span className="label">{`${progress}%`}</span>
            </div>
        </Loading>
        
        
    )


}



export default LoadingProgress