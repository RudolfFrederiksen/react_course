// import React from "react";

// import "./Button.css";

import styled from "styled-components";
const Button = styled.button`
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #8b005d;
    color: white;
    background: #8b005d;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

// const Button = props => {
//     return (
//         <button type={props.type} className="button" onClick={props.onClick}>
//             {props.children}
//         </button>
//     );
// };

export default Button;
