import {Genshin} from '../models/genshin.js'


function index (req,res){
  Genshin.find({})
  .then(genshins => {
    res.json(genshins)
  })
  .catch(err => {
    res.json(err)
  })
}

//create
function create(req,res){
  Genshin.create(req.body)
  .then(genshin => res.json(genshin))
  .catch(err => {
    res.json(err)
  })
}
//update
function update(req,res){
  Genshin.findByIdAndUpdate(req.params.id,req.body,
    {new: true})
    .then(genshin => {
      res.json(genshin)
    })
    .catch(err => {
      res.json(err)
    })
  
}
//delete
function deleteGenshin(req,res){
  Genshin.findByIdAndDelete(req.params.id)
  .then(genshin => {
    res.json(genshin)
  })
  .catch(err => {
    res.json(err)
  })
}
//show
function show(req,res){
  Genshin.findById(req.params.id)
  .then(genshin => {
    res.json(genshin)
  })
  .catch(err => {
    res.json(err)
  })
}

export{
  index,
  create,
  update,
  deleteGenshin as delete,
  show,
}