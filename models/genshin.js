import mongoose from 'mongoose'

const Schema = mongoose.Schema

const genshinSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, default: 'Description'},
  image: { type: String, default: "Image URL" },
  
}, {
  timestamps: true
})

const Genshin = mongoose.model('Genshin', genshinSchema)

export {Genshin}