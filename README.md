Next 13 page transitions with GSAP

This is an example of page transition in a Node 13 project whit App directory. Instead of using element to navigate between pages, navigation is hanled by a function that waits untill the end of the GSAP timeline and fires a router.push. Unfortunatelly the use of react hooks need "use client" directive, so some of the benefits of SSR is lost.
