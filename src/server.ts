import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/test', (request, response) => {
    return response.json({message: "Oie"});
})

app.listen(3333, () => {
    console.log('🚀 Server started on port 3333')
});