# Recipe Box

A simple, interactive web application for managing your personal recipe collection. Built with vanilla HTML, CSS, and JavaScript, this app allows you to add, view, edit, and delete recipes with a clean, user-friendly interface.

## Features

- **Add Recipes**: Create new recipes with custom names, ingredients, and step-by-step instructions
- **View Recipes**: Browse your recipe collection in an organized grid layout
- **Recipe Details**: Click on any recipe to view detailed ingredients and cooking steps
- **Edit Recipes**: Modify existing recipes (feature in development)
- **Delete Recipes**: Remove recipes you no longer need
- **Responsive Design**: Clean, modern interface with colorful recipe cards

## How to Use

1. **Adding a Recipe**:
   - Click the "Add Recipe" button in the header
   - Enter the recipe name (automatically capitalized)
   - Add ingredients by typing each ingredient on a new line
   - Add cooking steps by typing each step on a new line
   - Click "Add Recipe" to save

2. **Viewing Recipes**:
   - All recipes are displayed as cards in the main area
   - Click "View Recipe" on any card to see full details
   - Ingredients are displayed with bullet points
   - Steps are numbered for easy following

3. **Managing Recipes**:
   - Use the "Edit" button in the recipe view to modify recipes
   - Use the "Delete" button to remove recipes (with confirmation)

## Project Structure

```
Recipe_box/
├── html/
│   └── index.html          # Main HTML file
├── css/
│   └── style.css           # Styling and layout
├── js/
│   └── app.js              # Application logic
└── README.md               # This file
```

## Getting Started

1. **Clone or download** this repository to your local machine
2. **Open** the `html/index.html` file in your web browser
3. **Start adding recipes** by clicking the "Add Recipe" button

No additional setup or dependencies required - this is a pure client-side application!

## Technical Details

- **Frontend**: Vanilla HTML5, CSS3, and JavaScript (ES6+)
- **Storage**: Client-side only (recipes stored in browser memory)
- **Layout**: CSS Grid and Flexbox for responsive design
- **Styling**: Custom CSS with modern design elements
- **Browser Support**: Works in all modern browsers

## Features in Development

- Recipe editing functionality
- Recipe deletion confirmation
- Local storage persistence
- Recipe search and filtering
- Recipe categories/tags

## Contributing

This is a personal exploration project, but feel free to fork and modify for your own use!

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: Recipes are currently stored in browser memory and will be lost when the page is refreshed. Consider implementing local storage for persistent recipe storage.
