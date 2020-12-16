import React from 'react';
import { render } from 'react-dom';
import { RxObservable } from './components/rxjs';

interface HelloProps {
    name?: string;
}

export const Hello: React.FC<HelloProps> = ({ name }) => {
    const helloName = name ?? 'Unknown';
    return (
        <>
            <b>Hello, {helloName}!</b>
            <div>
                <RxObservable />
            </div>
        </>
    );
};

render(<Hello name='React' />, document.getElementById('root'));
