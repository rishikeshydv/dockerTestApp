import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3400;

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Route for serving index.html
app.get('/', (req, res) => {
    res.sendFile('public/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
