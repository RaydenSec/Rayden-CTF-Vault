const express = require('express');
const multer = require('multer');
const fs = require('fs'); 

const app = express();

const port = 3000; 

app.use(express.static("views"))

app.set("view engine", "ejs"); 
app.get('/', (req, res) => res.render("index")); 

app.listen(port, () => console.log(`Listening on port ${port}...`));

const storage = multer.diskStorage({ 
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
}); 

app.post('/check_pic', (req, res) => {

    let upload = multer({storage: storage}).single('profile_pic');

    upload(req, res, function(err) {

        if (!req.file) {
            return res.send('Please select an image to upload');
        } 
        if (!req.file.originalname.match(/\.jpg|JPG|jpeg|JPEG$/)) {
            return res.send("hmm.. doesn't seem like a jpg file.. &#128517;"); 
        } else if (err instanceof multer.MulterError) {
            return res.send(err);
        } else if (err) {
            return res.send(err);
        }  
        
        if (checkFlagFile(req.file.path, "get some delicious sultanas, flour, and anything you can find in the fridge (little surprise in the bun hurts nobody, in fact, a teeny bit of broccoli won't hurt anybody right?). Now here comes the mixing game, you gotta make sure it is mixed till it looks like your playschool playdough. Did I mention that I don't know how to cook, well, rise, bake and gloss are the next steps, I'm too lazy to do more research...") == true) {
            return res.render("flag.ejs"); 
        } else {
            return res.send("File content seems to be different...");
        }
    });
});

function checkFlagFile(filename, str) {
    const contents = fs.readFileSync(filename, 'utf-8');
  
    return contents.includes(str);
}
