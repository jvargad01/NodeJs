import app from './app.js';
import {connectDB} from './db.js';

connectDB();

app.listen(app.get("port"));
console.log("listener port: ", app.get("port"));