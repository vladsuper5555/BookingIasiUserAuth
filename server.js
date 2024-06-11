const PORT = 3002;
const express = require("express");
const { userProfileRouter } = require("./userProfile.router.js");
const cookieParser = require("cookie-parser");

const server = express();
    
// middlewarebut 
/*server.use(cors({  // ?!
    origin: 'http://localhost:5173'
}));*/
server.use(express.json());
server.use(cookieParser());
server.use('/users', userProfileRouter);

async function startServer() {
    server.listen(PORT, () => console.log(`Server started on PORT ${PORT}!`));
}

startServer();

module.exports = { server };
