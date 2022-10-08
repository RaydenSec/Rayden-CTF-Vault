const express = require('express');
const multer = require('multer');
const fs = require('fs'); 

const app = express();

const port = 3000; 

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
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }  
        if (checkFlagFile(req.file.path, 'Put 225ml milk in a small pan and gently heat until just below boiling point. Stir 50g diced butter into the hot milk until melted. Leave to cool for 5 mins, then stir in 2 beaten eggs. Sift 500g strong white bread flour, 50g caster sugar, 7g (1 sachet) fast-action dried yeast, 1 tsp cinnamon and ½ tsp mixed spice into a mixing bowl with a pinch of salt; stir. Make a well in the centre, then gradually pour in the milk mixture, stirring to form a slightly sticky dough.') == true) {
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
