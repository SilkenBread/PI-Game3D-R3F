"use strict";

import socketIOClient from "socket.io-client";


const urlLocalServer = "http://localhost:5000";
const urlDeployServer = "https://pi-game3d-websocket.onrender.com";

/**
 * Socket connection
 */
export const socket = socketIOClient(urlLocalServer);