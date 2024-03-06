# University of Dundee - Front End Developer 
## Interview Task

Matt Munro 

This repo contains an implementation of the https://www.hubspot.com/ as required for the interview task. 

---


## Dev setup
Installed the required dependencies: 

```
npm install
```

Start the dev server: 
```
npm start
```

Then open: http://127.0.0.1:8080/

## Running the test spec
```
npm run cypress:open
```
Select a browser, 'Start E2E testing...', then 'spec.cy.js'

### Notes and issues
#### Accessibility 
- a11y test error is given for the lack of contrast on the buttons, however, this is also the case on the actual website.

#### Bugs / missing features
- The 'Software' dropdown disappears if the mouse is moved slowly between the heading and the dropdown box because of the gap between them. Possible solutions: 
  - adjusting the size of the div to ensure overlap, 
  - creating a larger 'safe' zone in which the mouse is registered, 
  - extending the dropdown header div to be flush with the bottom of the header. 
- There are some layout issues when adjusting between sizes. e.g. On the actual page the text 'Grow better with HubSpot' is only ever displayed either with the first three words together then 'Hubspot' on a newline, or all together on one single line on smaller displays. In this implementation the words are sometimes shown on a separate line each. 
- The carousel only works at a wide resolution. 
  - This could be addressed by dynamically adjusting the 'slidesToShow' and 'movementWidth' values based on the current page width. 
- The carousel on the actual page can be dragged. Currently, this implementation only works with the buttons. 
  - A possible solution involves using a 'click' event on the 'carousel-image-container', then setting the X position of the images using the current mouse/pointer position. 

