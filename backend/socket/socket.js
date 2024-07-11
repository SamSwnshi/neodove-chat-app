import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

// NOTE - receiverSocketId
export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; // NOTE - here we use userId, socketId

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  // Corrected typo: qurey -> query
  const userId = socket.handshake.query.userId;

  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }

  // NOTE - io.emit() is used to send events to all the connected clients;
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // NOTE - socket.on() is used to listen to the events. Can be used both on client and server side.
  socket.on("disconnect", () => {
    console.log("a user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
