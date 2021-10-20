import express from "express";
import { router } from "./routes"
import "dotenv/config";
import { Server } from "socket.io";
import http from "http"
import cors from "cors"

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on("connection", socket => {
    console.log(socket.id)
});

app.use(cors());
app.use(express.json());
app.use(router);


export { server, io }