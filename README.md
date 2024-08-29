# Socket Chat Application

A Real-time group chat application built with **React** on the frontend and **Node.js** with Socket.io on the backend. 

### Demo

[React App.webm](https://github.com/user-attachments/assets/ffc40886-0991-4c71-a5ec-abdb758447f9)

## Technologies Used

- **Frontend**: React, Socket.io-client
- **Backend**: Node.js, Express, Socket.io
- **Styling**: CSS

## Features

- **Real-Time Communication**: Messages are sent and received instantly and getting saved locally in React state (_can be used with database and Redis for better scalability_).
- **Dynamic Avatars**: Unique avatars generated with consistent colors based on the sender's name.
- **Responsive Design**: The chat window and input fields are designed to be user-friendly and visually appealing.

## Folder Structure

```
socket-chat-app/
│
├── server/
│   ├── index.js           # Main server file
│   ├── package.json       # Server dependencies
│   └── ...                # Other server-related files
│
├── frontend/
│   ├── src/
│   │   ├── App.js         # Main React component
│   │   ├── App.css        # CSS styling
│   │   └── ...            # Other React components
│   ├── package.json       # Client dependencies
│   └── ...                # Other client-related files
│
└── README.md              # This file
```


## Installation

### Clone the Repository

### Setup the Backend

1. **Navigate to the backend directory**:

    ```bash
    cd server
    ```


2. **Start the server**:

    ```bash
    node index.js
    ```

### Setup the Frontend

1. **Navigate to the frontend directory**:

    ```bash
    cd ../frontend
    ```

2. **Start the React application**:

    ```bash
    npm start
    ```
