import { RingLoader } from "react-spinners";
import { css } from "@emotion/react";

const Loader = (props) => {
    return (<div className="loader">
        <RingLoader 
            color={"#720026"}
            size={100}
            css={css}
            speedMultiplier={2}
        />
    </div>);
};

export default Loader;