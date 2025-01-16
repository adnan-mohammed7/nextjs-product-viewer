# Next.js Product Viewer

## Overview
A Next.js-based product viewer application that dynamically fetches and displays product details from the "Product" API. This project demonstrates advanced proficiency in building modern web applications with a focus on responsive design, seamless user experience, and efficient API integration.

## Features
- **Dynamic Product Details**: Fetches and displays product data, including title, description, price, category, and images, using the "Product" API.
- **Home Page**: Includes the organization’s logo, featured product images, and an introduction/mission statement.
- **About Page**: Provides details about the organization and its offerings.
- **Responsive Design**: Ensures the application works seamlessly across different devices.

## Technologies
- React
- Next.js
- Axios
- CSS (for responsive styling)

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd nextjs-product-viewer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
### Development
Start the development server:
```bash
npm run dev
```
Visit the application at:
```
http://localhost:3000
```

### Production
To build and run the application in production mode:
1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```

## Project Structure
- `pages/index.js`: Home page implementation.
- `pages/about.js`: About page implementation.
- `pages/product/[id].js`: Dynamic route for individual product details.
- `components/ProductDetails.js`: Component to render detailed product information.
- `styles/`: Directory containing CSS for styling the application.

## Screenshots
Include screenshots of your application to showcase the UI. Replace the placeholders below with actual screenshots:

![Screenshot (124)](https://github.com/user-attachments/assets/10870516-087f-4f13-a506-72e00620a28a)
*Caption: Home page displaying the logo and featured products.*

![Screenshot (122)](https://github.com/user-attachments/assets/33b2af22-bc72-4dde-8d83-a54662d6fb4f)
*Caption: All the products with details.*

![Screenshot (123)](https://github.com/user-attachments/assets/88a6bb51-3b40-409e-8362-dd7be5a91ea9)
*Caption: About page*

## Highlights
- Designed modular and reusable components using React, ensuring efficient and maintainable code.
- Leveraged Next.js for optimized server-side rendering and dynamic routing, enhancing performance and scalability.
- Seamlessly integrated RESTful API data to dynamically display product details, demonstrating strong backend integration skills.
- Delivered a responsive and user-centric interface with CSS, ensuring compatibility across various devices.

---

**Developed by Adnan Mohammed**
