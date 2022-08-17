import React from "react";

export interface Props {
    children: string;
    color: string;
    size: 'small' | 'medium' | 'large';
};

// const Title: React.FC<Props> = ({children, color, size}) => {
//     return <h1></h1>;
// };

const Title: React.FC<Props> = ({children, color, size}) => {
    const getStyle = (): React.CSSProperties => ({
        color: color,
        fontSize: size === 'large' ? '40px' : size === 'medium' ? '30px' : '20px'
    })

    return <h1 style={getStyle()}>{children}</h1>;
}

export default Title;