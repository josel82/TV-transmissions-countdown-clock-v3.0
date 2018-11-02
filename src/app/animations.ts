import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    animateChild,
    group,
    stagger
} from '@angular/animations';


export const fadeInAnimation = trigger('fadeInOut', [

    transition(':enter', [
        style({opacity: 0}),
        animate('200ms ease-in', style({opacity: 1}))
    ]),
    transition(':leave', [
        animate('200ms ease-in', style({opacity: 0}))
    ])
]);

export const slideInOutAnimation = trigger('slideInOut', [
   transition(':enter', [
       style({ transform: 'translateX(-100%)'}),
       animate('1s ease-in', style({ transform: 'translateX(0)' }))
   ]),
   transition(':leave', [
    animate('1s ease-in', style({ transform: 'translateX(100%)' }))
   ])
])
