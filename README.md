# Recipe Manager

This Recipe Manager is a web application built using React.js with vite for the frontend and Node.js with Express for the backend. It allows users to view popular recipes, add their own recipes, and view details of individual recipes.

## Features

- _**View Recipes**_: Users can browse through a collection of recipes.
- _**Add Your Own Recipe**_: Users can submit their own recipes using a form which will be saved on a database.
- _**View Recipe Details**_: Users can view detailed information about each recipe, including ingredients, preparation time, cooking time, total time, and instructions.
- _**Dynamic Routing**_: The application uses dynamic routing to display individual recipe details based on the recipe ID.

## Technologies Used

- _**Frontend**_: React.js, React Router
- _**Backend**_: Node.js, Express
- _**Database**_: SQLite3
- _**Styling**_: CSS

## Soon to Come

- _**User Sign-Up/Log-In**_: Have a user registration system
- _**Popular, Fast and Simple Recipes**_: Have a page that can classify recipes within these categories
- _**Images**_: Let users upload their own image of their creations
- _**Improved styling for numerous pages**_: Some pages are bland as of right now and need some styling to look more appealing

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install` in both the `src` and `server` directories.
4. Start the backend server by running `npm run dev` in the `server` directory.
5. Start the frontend development server by running `npm run dev` in the `src` directory.
6. Open your browser and navigate to `http://localhost:5173` or the given url to view the application.

## Folder Structure

The project folder structure is organized as follows:

```
recipe-app/
│
├── src/                   # Frontend React application
│   ├── App.tsx            # Main React application component
│   ├── App.css            # Global CSS styles
│   ├── images/            # Folder containing all website images
│   └── pages/             # Page-level components
│
└── server/                 # Backend Node.js application
    ├── database/          # SQLite3 database file and schema
    ├── routes/            # Express route handlers
    ├── app.js             # Main Express application file
    └── README.md          # Backend specific instructions
```

## Credits

- [AlexThiry](https://github.com/AlexThiry)

## License

This project is licensed under the [MIT License](LICENSE).
