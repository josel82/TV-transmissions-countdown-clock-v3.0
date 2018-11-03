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

export const slideInFromLeft = trigger('slideInLeft', [
   transition(':enter', [
       query('.countdown-input', [
            style({ transform: 'translateX(-100%)'}),
            animate('300ms ease-in', style({ transform: 'translateX(0)' }))
       ])
       
   ]),
   transition(':leave', [
       query('.countdown-input, .countdown-output', [
            animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))
       ])
   ])
])

export const slideInFromRight = trigger('slideInRight', [
    transition(':enter', [
        query('.countdown-output', [
             style({ transform: 'translateX(100%)'}),
             animate('300ms ease-in', style({ transform: 'translateX(0)' }))
        ])
    ]),
    transition(':leave', [
        query('.countdown-input, .countdown-output', [
             animate('300ms ease-in', style({ transform: 'translateX(100%)' }))
        ])
    ])
 ])

 export const blockInitialRenderAnimation = trigger('blockInitialRenderAnimation', [
    transition(':enter', [])
 ]);
