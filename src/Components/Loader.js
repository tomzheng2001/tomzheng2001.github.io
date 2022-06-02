import { RingLoader } from "react-spinners";
import { css } from "@emotion/react";

const Loader = (props) => {
    // return (<div className="loader">
    //     <RingLoader
    //         color={"#720026"}
    //         size={100}
    //         css={css}
    //         speedMultiplier={2}
    //     />
    // </div>);
    return (
        <div className="loadingmain">
            <div className="loader">
                <div class="cradle">
                    <div class="floor"></div>

                    <div class="wood base">
                        <div class="left"></div>
                        <div class="right"></div>
                        <div class="front"></div>
                        <div class="back"></div>
                        <div class="top">
                            <div class="shadow"></div>
                            <div class="shadow"></div>
                            <div class="shadow"></div>
                            <div class="shadow"></div>
                            <div class="shadow"></div>
                        </div>
                    </div>
                    <div class="wood poll">
                        <div class="left"></div>
                        <div class="right"></div>
                        <div class="front"></div>
                        <div class="back"></div>
                    </div>
                    <div class="wood poll">
                        <div class="left"></div>
                        <div class="right"></div>
                        <div class="front"></div>
                        <div class="back"></div>
                    </div>
                    <div class="wood poll">
                        <div class="left"></div>
                        <div class="right"></div>
                        <div class="front"></div>
                        <div class="back"></div>
                    </div>
                    <div class="wood poll">
                        <div class="left"></div>
                        <div class="right"></div>
                        <div class="front"></div>
                        <div class="back"></div>
                    </div>
                    <div class="wood strecher">
                        <div class="left"></div>
                        <div class="right"></div>
                        <div class="front dots"></div>
                        <div class="back"></div>
                        <div class="top"></div>
                    </div>
                    <div class="wood strecher">
                        <div class="left"></div>
                        <div class="right"></div>
                        <div class="front"></div>
                        <div class="back dots"></div>
                        <div class="top"></div>
                    </div>

                    <div class="ballPlate">
                        <div class="ballWrapper">
                            <div class="ball"></div>
                        </div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                    <div class="ballPlate">
                        <div class="ballWrapper">
                            <div class="ball"></div>
                        </div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                    <div class="ballPlate">
                        <div class="ballWrapper">
                            <div class="ball"></div>
                        </div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                    <div class="ballPlate">
                        <div class="ballWrapper">
                            <div class="ball"></div>
                        </div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                    <div class="ballPlate">
                        <div class="ballWrapper">
                            <div class="ball"></div>
                        </div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
            <h1 className="loader__text">Loading...</h1>
        </div>
    );
};

export default Loader;
