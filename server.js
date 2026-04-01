const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const {apiLimiter} = require("./middleware/rateLimiter");

dotenv.config();

//connect mongoDB database
connectDB();

const app = express();
app.use(express.json());

//Rate Limiting
app.use("/api", apiLimiter);

//Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/records", require("./routes/recordRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

//Swagger Docs
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const port = process.env.PORT

const server = app.listen(port, () => 
    console.log(`server running on the port ${port}`)
);

module.exports = server;