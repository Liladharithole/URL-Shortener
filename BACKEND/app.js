import express from 'express';
const app = express();
import { nanoid } from 'nanoid';

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


app.get('/api.create', (req, res) => {
    res.send(nanoid());
}
);



app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})