import {
    trigger,
    style,
    animate,
    transition,
    query
} from '@angular/animations';

/**
 * Trigger for the fade-in/fade-out animation
 * 
 */
export const fadeInAnimation = trigger('fadeInOut', [

    transition(':enter', [
        style({opacity: 0}),
        animate('200ms ease-in', style({opacity: 1}))
    ]),
    transition(':leave', [
        animate('200ms ease-in', style({opacity: 0}))
    ])
]);
/**
 * Trigger for slide-in/slide-out animation, coming from the left side of the screen
 */
export const slideInFromLeft = trigger('slideInLeft', [
   transition(':enter', [
       query('.countdown-input', [ //it targets the CountdownInput component
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

/**
 * Trigger for slide-in/slide-out animation, coming from the right side of the screen
 */
export const slideInFromRight = trigger('slideInRight', [
    transition(':enter', [
        query('.countdown-output', [ //it targets the CountdownOutput component
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

/**
 * No-Op transition. It prevents Animations during
 * the initial render of ngIf in the children components
 */
 export const blockInitialRenderAnimation = trigger('blockInitialRenderAnimation', [
    transition(':enter', [])
 ]);
