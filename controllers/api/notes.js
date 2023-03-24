const Note = require('../../models/note')

module.exports = {
    index,
    create
}

async function index(req, res) {
    try {
        req.body.user = req.user._id
        const notes = await Note.find({user: req.user._id});
        res.json(notes);
    } catch (err) {
        res.status(400).json(err)
    }
    
}

async function create(req, res) {
    try {
        req.body.user = req.user._id
        const newNote = await Note.create(req.body);
        res.json(newNote);
    } catch (err) {
        res.status(400).json(err)
    }
}


// async function create(req, res) {
//     try{
//         req.body.user = req.user._id;
//         const note = await Note.create(req.body);
//         res.json(note);
//     } catch (err) {
//         res.status(400).json(err)
//     }
    
// }