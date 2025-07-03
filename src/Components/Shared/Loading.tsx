import { Commet } from "react-loading-indicators";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Commet 
                color="#DE3241" 
                size="medium" 
                text="" 
                textColor=""
            />
        </div>
    );
};

export default Loading;