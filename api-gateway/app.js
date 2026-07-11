const express = require('express');
const app = express();
const helmet  = require('helmet');
const cors = require('cors');
const config = require('./src/config/config');
const PORT = config.port || 4000;
app.use(express.json());
const userRoute = require("./src/routes/user.routes");
const doctorRoute = require("./src/routes/doctor.routes");
const appointmentRoute = require("./src/routes/appointment.routes");
const { port } = require('./src/config/config');
app.use("/user", userRoute);
app.use("/doctor", doctorRoute);
app.use("/appointment", appointmentRoute);
app.get((req,res,next)=>{
    res.send("Api gateway is working")
});
app.use(helmet());
app.use(cors());
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    })
});

app.listen(PORT,()=>{
    console.log(`API gateway is listening on port ${port}`);
});