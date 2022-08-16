## Description

Challenge for "Litebox". The project consists of the development of a dynamic Film Catalog.

It should list a featured movie, and popular movies from a public API.

However, the catalog can be updated by the user, being able to add new movies to the “My movies” category. There is no endpoint to add new movies, just save images to localStorage.

## Technology used

-   ### React.js
    -   ###### React Js
    -   ###### Redux Toolkit
    -   ###### SaSS
    -   ###### Axios
    -   ###### MUI

## Installation

-   Install npm dependencies: `npm install or yarn install`
-   Run app: `npm start or yarn start`

## Design

The Desktop and Mobile design prototype is available in Figma, you can enter in this link: https://www.figma.com/file/8IrWHW2aUQZN6ILycX6ug7/Web-Versi%C3%B3n-Standar?node-id=0 %3A1

All the elements present in the design must be laid out with their corresponding interactions and states (Hovers).

The only functionality that requires logic and implementation is "Add Movie", the rest of the menu buttons are simply illustrative and do not need to fulfill any function but should be laid out, as they appear in the design.

## Development

The add movies functionality should simply be able to upload an image and its title and then list that movie in the “My Movies” category (accessed via the Popular / My Movies dropdown).

## Public API Endpoints

### **Featured Movie**

**[GET]** [https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20](https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20)

### **Popular (List the first 4 Movies)**

**[GET] [**https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20](https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20)

_Information about the use of images:_ [https://developers.themoviedb.org/3/getting-started/images](https://developers.themoviedb.org/3/getting-started/images)

## Deploy
