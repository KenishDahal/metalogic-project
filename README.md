1. Introduction
   Redesigning a page from the Metalogic website. 

2. Architecture
   npm package  used 

3.  Design
    Thoroughly studies the structure of Mealogic website. Made a wireframe of the wibesite. Diffenet components, mixins, pages ,scss and many more.

4.  Development
    - npx create-react-app my-react-app

    Start the Development Server
    - npm start

    Install all Dependencies
    - npm i 

5.  Features
    - Navbar: When the screen is in scroll, the navbar is hidden and unhidden accordingly. 

    - React Headroom is used as a component.

    - Component modal: since 1st 2nd 3rs  section is similar ,, one component is used on all with props  injection.

    -Scss features:
       *Breakpoint is used for diffent viewport.
       *typos is customised.


6.  Deployment
     npm run build  to set up for deployment.
     Netlify is used for deployment

     demo link - https://metalogic.netlify.app/
     code - https://github.com/KenishDahal/metalogic-project
     
# Design decisions
   Mobile menu is changed,as it was using whole page. I changed it using Modal component, which appears from right side of screen.  

   Padding is consistent is mobile view, whereas it wasn't previously.

   Structure folder is used in designing.

   footer one section is hidden below large breakpoint. (around 1080)

# Challenges encountered.
   - Since animation was not too difficult, but time was insuffient due to my poor timemangement.
   - Typography was difficult to allign.




