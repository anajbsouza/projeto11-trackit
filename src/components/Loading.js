
import { ThreeDots } from 'react-loader-spinner'

export default function Loading(props) {
    const { state, text } = props;
    if(state === true){
        return (
            <ThreeDots 
                color="white" 
                height={80}
                width={80} 
            />
        )
    }if(state === false){
        return (
            <p>{text}</p>
        )
    }
}