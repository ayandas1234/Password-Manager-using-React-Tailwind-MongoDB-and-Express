# 🔐 < PassOp / > - A Simple Password Manager

## 🌟 Overview

<p align="justify">The <b>< PassOp / ></b> is a Simple Password Manager is a secure web application designed to store and manage user credentials efficiently. It provides a user-friendly interface with seamless integration with a backend API that interacts with <b>MongoDB</b> for persistent data storage. The application ensures that users can safely store and retrieve passwords without compromising security.</p>

---

## 🎯 Functionality

* 📋 **Store Credentials:** Users can securely store passwords along with website details.

* 🔄 **Edit & Delete:** Modify and remove saved credentials easily.

* 🔐 **Password Encryption:** All passwords are encrypted before being stored.

* 📂 **Local Storage:** User session and settings are saved for convenience.

* 🔔 **Instant Notifications:** Success and error messages are displayed using React-Toastify.

* 📊 **User-Friendly Interface:** Simple, modern UI built with React and Tailwind CSS.

---

## 🎨 UI Features

* 🏗 **Consistent Design:** The frontend is built with React and Tailwind CSS, ensuring a responsive and modern UI with a minimalistic design.

* 🚀 **Navigation:** A structured Navbar helps users easily access different functionalities, such as adding and viewing stored passwords.

* 🔑 **Password Storage & Retrieval:** Users can add, delete, and update saved credentials using an intuitive Manager component with easy-to-use controls.

* 🔔 **Notifications:** Uses React-Toastify to display success and error messages, providing real-time feedback to users.

* 🔒 **Security Measures:** Data is encrypted before storage and decrypted upon retrieval to prevent unauthorized access.

* 📌 **Footer Section:** Provides necessary information, quick links, and access to additional features.

* 📊 **Grid-Based Layout:** Ensures clear visibility and efficient management of stored passwords.

* ✅ **Validation & Alerts:** Provides real-time feedback on user input, ensuring strong password creation and error handling.

---

## 🏗 Libraries / Development Tools
### 🎨 Frontend
* ⚛️ **React.js:** Component-based architecture for a dynamic and interactive UI.

* 🎨 **Tailwind CSS:** Provides modern and responsive design with a utility-first approach.

* 🚏 **React Router:** Enables smooth navigation between different sections of the app.

* 🔔 **React-Toastify:** Displays elegant notifications for user actions.

* 🔢 **uuidv4:** Generates unique IDs for password entries to ensure efficient tracking.

---

### 🖥 Backend
* 🚀 **Node.js & Express.js:** Server-side framework for handling API requests and routing.

* 🗄 **MongoDB & Mongoose:** NoSQL database for storing encrypted credentials with a schema-based approach.

* ⚙️ **Dotenv:** Manages environment variables for better security and configuration.

* 🔄 **Cors:** Enables secure communication between the frontend and backend.

---

## ⚙️ Installation and Setup

### 1. Clone the repository:
```
git clone https://github.com/ayandas1234/Password-Manager-using-React-Tailwind-MongoDB-and-Express.git
```

### 2. Navigate to the project directory:
```
cd passop-mongo
```

### 3. Install dependencies for the backend:
```
cd backend
npm install mongodb
npm i body-parser
```

### 4. Install dependencies for the frontend:
```
npm install
npm install cors
npm install uuid
npm install --save react-toastify
```

### 5. Create a .env file in the backend directory and add the following:
```
npm i dotenv
MONGO_URI = mongodb://localhost:27017;
```

### 6. Start the backend server:
```
node --watch server.js
```

### 7. Start the frontend server:
```
npm run dev
```

---

## 🎨 Styling with Tailwind CSS

* **Utility Classes:** Enables rapid styling without writing custom CSS.

* **Responsive Design:** Works seamlessly across devices.

* **Custom Themes:** Tailwind configuration allows for easy theming.

---

## 📸 Screenshots
* __view 1__
![alt text](<Screenshot 2025-02-10 004408.png>)

* __view 2__
![alt text](<Screenshot 2025-02-10 004419.png>)

* __view 3__
![alt text](<Screenshot 2025-02-10 004453.png>)

* __view 4__
![alt text](<Screenshot 2025-02-10 004505.png>)

* __view 5__
![alt text](<Screenshot 2025-02-10 004522.png>)

---

## 🎥 Video

<video controls src="Frontend and Backend.mp4" title="Title"></video>

---

## 🚀 Future Improvements

* **🔐 Two-Factor Authentication (2FA)** for added security to prevent unauthorized logins.

* **✅ Password Strength Checker** to guide users on creating strong passwords based on entropy calculations.

* **☁️ Cloud-based Backup** for restoring lost credentials and ensuring data redundancy.

* **📱 Biometric Authentication** support for enhanced security on mobile devices.

* **🖥 Browser Extension** for quick password autofill and secure access across platforms.

* **🔒 Role-Based Access Control (RBAC)** to manage permissions for different users.

* **🌙 Dark Mode Support** for better accessibility and user experience.

#### With these improvements, the Password Manager will become a more robust, secure, and user-centric application suitable for both personal and enterprise use.

---

## 🎯 Conclusion

<p align="justify">Building this Password Manager allowed me to deepen my understanding of both <i><b>frontend</b></i> and <i><b>backend development</b></i>. By working with <i><b>React.js, Tailwind CSS, Node.js, and MongoDB</b></i>, I enhanced my <b>full-stack development</b> skills. The integration of authentication, API communication, and database interactions provided valuable insights into secure web development.</p>

---