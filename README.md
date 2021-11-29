# Jonathan McGuire - Personal Portfolio Site

This is my personal portfolio website.

It makes use of the following:

-   HTML5
-   SCSS/Sass (using mixins, variables and responsive media queries). The SCSS files were broken up for each page, to make the site easier to manage.
    -Flexbox & Grid - both have been used for positioning and to aid responsivness.
-   JavaScript - used to make simple animations, such as the foldable nav bar and onclick card screens.
-   Anime.js - the library was used via CDN to create the name animation on the main page.
-   FontAwesome - Used via CDN for social icons
-   Git/github - used for version control.

The site is hosted on Netlify.

## Running a local version

To run this project locally, first clone the respository using the following command in the usual place for your development projects

        git clone https://github.com/popatre/personal-site.git

Open the project in your usual code editor and run the following command to install the dependencies. This will require node.js v14.15.0 (or higher)

        npm install

The site can be viewed by opening the index.html file in your brower.

To make changes to the SCSS, you will need a Sass compiler such as [Live Sass Complier](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

Once install, make sure yo run the complier by clicking 'watch sass' in the task bar.

This will compile your SCSS code into CSS, which can be viewed in the styles.css file. (This file should not be changed/edited)
