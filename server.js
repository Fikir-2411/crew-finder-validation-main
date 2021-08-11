import app from './src/app.js';
import http from 'http';

const PORT = process.env.PORT || 5000;

http.createServer(app).listen(PORT, () => console.log(`listening on port ${PORT}`));

