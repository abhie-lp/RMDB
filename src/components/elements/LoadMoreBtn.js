import React from "react";
import {StyledLoadMoreBtn} from "../styles/StyledLoadMoreBtn";

const LoadMoreBtn = ({text, callback}) => (
    <StyledLoadMoreBtn onClick={callback}>
        {text}
    </StyledLoadMoreBtn>
)

export default LoadMoreBtn;
