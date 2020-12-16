import React from 'react';
import { Observable } from 'rxjs';

export const RxObservable: React.FC = () => {
    const observable = new Observable((subscriber) => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
            subscriber.next(4);
            subscriber.complete();
        }, 1000);
    });

    const handleClick = () => {
        console.log('just before subscribe');
        observable.subscribe({
            next(x) {
                console.log('got value ' + x);
            },
            error(err) {
                console.error('something wrong occurred: ' + err);
            },
            complete() {
                console.log('done');
            },
        });
        console.log('just after subscribe');
    };

    return <button onClick={handleClick}>On Observable</button>;
};
