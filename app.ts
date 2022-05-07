import express from 'express';
import {Request,Response} from 'express';
import path from 'path';
const app = express();
const PORT = 8080;

app.use('/', express.static('public'))
app.get('/', function(req:Request, res:Response) {
    res.redirect(path.join('/Gloria and Dany - Me and Mory.html'));
  });


app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/`);
});