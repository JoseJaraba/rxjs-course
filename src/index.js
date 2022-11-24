import { fromEvent } from "rxjs";

const onKeyDown$ = fromEvent(document, 'keydown');

const mouseObserver = {
    next: (event) => {
        console.log(event.key);
    },
    complete: () => {},
    error: (error) => {}
};

onKeyDown$.subscribe(mouseObserver);