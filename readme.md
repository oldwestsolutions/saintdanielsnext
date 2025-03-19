# Saint Daniels Healthcare Website

This is a TypeScript implementation of the Saint Daniels Healthcare website. The design has been preserved exactly as shown in the original mockups, but the codebase has been migrated to TypeScript for improved type safety and maintainability.

## Project Setup

Follow these steps to set up and run the project:

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone this repository:
   ```
   git clone <repository-url>
   cd saint-daniels-healthcare
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Replace placeholder images:
   - Navigate to the `public/images` directory 
   - Replace the placeholder images with your actual images
   - Ensure that the filenames match those referenced in the code

### Development

To start the development server:

```
npm start
```

This will start the application at http://localhost:3000.

### Building for Production

To build the application for production:

```
npm run build
```

The build artifacts will be stored in the `build/` directory.

## Project Structure

- `src/components`: React components that make up the UI
- `src/pages`: Page components that compose multiple UI components
- `src/types`: TypeScript type definitions
- `src/styles`: CSS files for styling components
- `src/assets`: Static assets like images

## Image Replacement Guide

Here's a guide to the images you need to replace:

1. Logo: `public/images/logo.svg`
2. Hero Image: `public/images/hero-image.jpg`
3. Benefit Icons:
   - `public/images/treasure-icon.png`
   - `public/images/crown-icon.png`
   - `public/images/hearts-icon.png`
4. Treasure Images:
   - `public/images/gym-access.jpg`
   - `public/images/walgreens.jpg`
   - `public/images/health-tech.jpg`
5. Avatar: `public/images/elizabeth-avatar.jpg`

Make sure to maintain the aspect ratios and dimensions to ensure the design stays consistent.

## Customization

If you need to customize any aspects of the design:

- Color scheme: Edit the CSS variables in `src/styles/variables.css`
- Text content: Modify the text in the respective component files
- Layout and spacing: Adjust the CSS in the component-specific style files

## Technologies Used

- React
- TypeScript
- CSS

## License

All rights reserved © 2025 Saint Daniels Healthcare Rewards.
