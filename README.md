# React Portfolio

This is my personal portfolio website built with React and hosted for free using GitHub Pages.

---

## 🚀 Live Demo

[https://687b63f7e81937fd764d9c45--trisitaportfolio.netlify.app/#hero](https://687b63f7e81937fd764d9c45--trisitaportfolio.netlify.app/#hero)

---

## 💻 Project Setup & Local Development

To run this project locally on your machine:

1. **Clone the repository**

```bash
git clone https://github.com/trishita-26/portfolio.git
cd portfolio
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm start
The app will be available at http://localhost:3000.



bash
Copy
Edit
npm install --save-dev gh-pages
In your package.json, the following scripts should exist:

json
Copy
Edit
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  // other scripts...
}
To deploy, run:

bash
Copy
Edit
npm run deploy
This will build the app and publish it to the gh-pages branch. Your site will be live at the URL above.

🔧 Notes
If you are using React Router, ensure you set the basename prop in your router like this:

jsx
Copy
Edit
<BrowserRouter basename="/portfolio">
  {/* routes */}
</BrowserRouter>
Always use relative paths for assets to avoid broken links on GitHub Pages.

📞 Contact
Feel free to reach out to me via:

Email: trishitaheli@gmail.com

LinkedIn: linkedin.com/in/trisitaghosh

Thank you for visiting my portfolio!
— Trisita Ghosh
