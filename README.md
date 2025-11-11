# ✨ VAT / Sales Tax Calculator ✨

A modern, blazing-fast, and beautifully designed VAT & Sales Tax calculator built with **ReactJS** and **Tailwind CSS**. This single-page application provides instant and accurate tax calculations, making it an essential tool for small businesses, freelancers, and shoppers worldwide.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue?logo=typescript)](https://www.typescriptlang.org/)

![App Screenshot](https://picsum.photos/1200/600)
*A preview of the calculator's clean interface and cosmic theme.*

---

## 🚀 Key Features

- **Dual Calculation Modes**: Seamlessly switch between 'Add Tax' (to find the gross price) and 'Remove Tax' (to find the net price).
- **Instantaneous Results**: Calculations are performed on-the-fly as you type, powered by pure JavaScript functions. No server-side waiting.
- **Stunning & Clean UI**: A financial-focused interface designed for clarity, featuring a unique animated cosmic background.
- **Fully Responsive**: Flawlessly adapts to all devices, from mobile phones to widescreen desktops.
- **SEO-Optimized Content**: Includes a comprehensive 3500+ word article on global tax systems and embedded JSON-LD schema to rank higher on search engines.
- **Privacy First**: All calculations happen client-side in your browser. We don't collect, store, or see your data. Ever.
- **Helpful Modals**: Quick access to an About page, a How-to-Use Guide, Privacy Policy, and more.

## 💡 Why Use This Calculator?

In a world of complex financial tools, our VAT/Sales Tax calculator stands out by focusing on three core principles:
1.  **Speed**: Get the numbers you need without delay. The interface is snappy and responsive.
2.  **Simplicity**: No clutter, no unnecessary features. Just the essential tool, designed to be intuitive from the first second.
3.  **Aesthetics**: We believe functional tools can also be beautiful. The clean layout and animated theme make a mundane task feel pleasant.

## 🛠️ Tech Stack

- **Framework**: ReactJS (Functional Components & Hooks)
- **Styling**: Tailwind CSS for a utility-first CSS workflow.
- **Language**: TypeScript for robust, type-safe code.
- **Core Logic**: Pure, side-effect-free TypeScript functions for all mathematical calculations.

## 📂 Project Structure

The project is organized logically to separate concerns, making it easy to maintain and scale.
```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ThemeLayout.tsx       # Main layout, background, modals
│   │   └── TaxCalculatorTool.tsx # The calculator UI and state
│   ├── utils/
│   │   ├── SeoArticle.tsx        # The collapsible SEO article
│   │   └── TaxMath.ts            # Pure tax calculation functions
│   ├── App.tsx                   # Main app component
│   └── index.tsx                 # React entry point
├── index.html                    # The single HTML page
├── README.md                     # You are here!
└── ... other config files
```

## ⚙️ Getting Started

To run this project locally, follow these simple steps:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/hsinidev/vat-sales-tax-calculator.git
    cd vat-sales-tax-calculator
    ```

2.  **Install Dependencies**
    Using `npm`:
    ```bash
    npm install
    ```
    Or using `yarn`:
    ```bash
    yarn install
    ```

3.  **Start the Development Server**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).

## ✍️ Branding & Contact

This project was designed and developed with ❤️ by **HSINI MOHAMED**.

- **GitHub**: [@hsinidev](https://github.com/hsinidev)
- **Website**: [doodax.com](https://doodax.com)
- **Email**: [hsini.web@gmail.com](mailto:hsini.web@gmail.com)

## 📄 License

This project is open-source and distributed under the **MIT License**.
