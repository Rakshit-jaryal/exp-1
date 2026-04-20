# 💬 Real-Time Chat Application using WebSockets (Exp 10)

## 📌 Objective

To develop a real-time chat application using WebSockets that allows multiple users to communicate instantly through text and voice messages.

---

## 🧠 Description

This project is a full-stack real-time chat application built using:

* **Frontend:** React (Vite)
* **Backend:** Spring Boot (WebSocket + STOMP)
* **Communication:** WebSockets for real-time messaging

Users can join a chat room, send messages, and receive messages instantly without refreshing the page. The application also supports voice message recording and playback.

---

## ⚙️ Technologies Used

### Frontend

* React.js
* Vite
* CSS (Custom UI Styling)

### Backend

* Spring Boot
* WebSocket (STOMP Protocol)
* SockJS

---

## 🚀 Features

* 👥 Multi-user chat system
* ⚡ Real-time messaging using WebSockets
* 🎙 Voice message support
* 🟢 Online user tracking
* 💬 Clean and responsive UI
* 🔁 Instant message broadcasting

---

## 🛠️ How to Run the Project

### 1. Clone / Extract the Project

```bash
git clone <repository-url>
```

---

### 2. Run Backend (Spring Boot)

Open terminal in backend folder:

```bash
cd Websocketdev
.\mvnw.cmd spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

### 3. Run Frontend (React)

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🧪 Testing the Application

1. Open the app in **two browser tabs**
2. Enter different usernames
3. Join the chat room
4. Send messages from one tab
5. Verify messages appear instantly in the other tab

---

## 📸 Output

* Users successfully connected to chat room
* Messages delivered in real-time
* Voice messages recorded and played
* Multiple users interacting simultaneously

---

## ✅ Result

The real-time chat application was successfully implemented using WebSockets. Messages were transmitted instantly between multiple users without page reload, demonstrating efficient real-time communication.

---

## 📚 Conclusion

This experiment helped in understanding:

* WebSocket protocol and real-time communication
* Integration of frontend and backend
* STOMP messaging architecture
* Handling multiple users in a chat system

---

## 🔮 Future Enhancements

* Add emoji support 😏
* Typing indicator feature
* Private messaging
* Database integration for message storage
* Authentication system

---

## 👤 Author

* Name: Rakshit
* Course: B.E. CSE (AI & ML)

---
![alt text](<Screenshot 2026-04-20 103000.png>)

![alt text](<Screenshot 2026-04-20 102921.png>)

![alt text](<Screenshot 2026-04-20 102930.png>)