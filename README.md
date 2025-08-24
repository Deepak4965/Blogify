# 📖 Blogify  

Blogify is a **full-stack blogging application** built using **Node.js, Express.js, and MongoDB** with **EJS** templates for rendering views.  

It allows users to **sign up, log in, create blogs, edit, delete, and read posts**.  
This project helped me understand how to build a **real-world backend with authentication and database integration**.  

---

## 🚀 Features  

✅ **User Authentication** – Register & Login using sessions (secure authentication).  
✅ **Create Blog Posts** – Add your own blogs with title & content.  
✅ **Edit & Delete** – Update or remove your blog posts anytime.  
✅ **Read Posts** – Anyone can browse blogs without an account.  
✅ **MVC Structure** – Clean folder separation (models, routes, middleware, services, views).  
✅ **Database Integration** – MongoDB with Mongoose for storing users & blogs.  

---

## 🛠 Tech Stack  

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Frontend (Templating):** EJS  
- **Authentication:** Session & Cookies  
- **Architecture:** MVC Pattern  

---

## 📂 Project Structure  

Blogify/
│── app.js # Main entry point
│── Db.js # Database connection
│── models/ # Mongoose schemas (User, Blog)
│── routes/ # Express routes (auth, blogs)
│── services/ # Business logic (controllers)
│── middleware/ # Authentication & error handling
│── views/ # EJS templates for frontend
│── public/ # Static files (CSS, JS, Images)
│── package.json # Dependencies


---

## ⚙️ Installation & Setup  

1. **Clone this repo**  
   ```bash
   git clone https://github.com/Deepak4965/Blogify.git
   cd Blogify
Install dependencies

bash
Copy code
npm install
Create .env file
Add the following:

env
Copy code
PORT=3000
MONGO_URI=your_mongodb_connection
SESSION_SECRET=your_secret_key
Run the project

bash
Copy code
npm start
Open: 👉 http://localhost:3000

📚 What I Learned
How to connect Node.js with MongoDB using Mongoose.

Implementing Authentication with sessions and cookies.

Structuring a project with MVC architecture.

Performing full CRUD operations (Create, Read, Update, Delete).

Using EJS for server-side rendering.


🤝 Contributing
Contributions are welcome! Fork the repo & make a pull request 🚀

📜 License
This project is MIT Licensed – feel free to use and improve it.
