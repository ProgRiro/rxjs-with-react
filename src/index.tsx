import React from 'react';
import { render } from 'react-dom';

interface HelloProps {
    name?: string;
}

export const Hello: React.FC<HelloProps> = ({ name }) => {
    const helloName = name ?? 'Unknown';
    return <b>Hello, {helloName}!</b>;
};

render(<Hello name='React' />, document.getElementById('root'));
