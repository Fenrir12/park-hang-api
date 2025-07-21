const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');
const https = require('https');
const fs = require('fs');

const authRoutes = require('./routes/authRoutes');
const parkRoutes = require('./routes/parkRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/parks', parkRoutes);
// app.use('/api/checkin', require('./routes/checkinRoutes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT;
const httpsOptions = {
    key: fs.readFileSync('./parkhang.key'),
    cert: fs.readFileSync('./parkhang.cert'),
};

https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(`🚀 HTTPS Server running on https://localhost:${PORT}`);
});
