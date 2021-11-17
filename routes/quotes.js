import express from "express";
const router = express.Router();
let quotes = [
  {
    quote: "When you get tired,learn to rest, not quit",
    author: "Banksy",
  },
  {
    quote: "The purpose of our lives is to be happy",
    author: "Lama",
  }
];
router.get("/", (req, res) => {
  console.log(quotes)
  res.send(quotes)
});
router.post("/",(req,res)=>{
    quotes.push(req.body)
    console.log(req.body)
  res.send(`we received ur quote with quote-${req.body.quote} and author-${req.body.author}`)

})
router.get("/:id",(req,res)=>{
    res.send(quotes[req.params.id])
})
router.delete("/:id",(req,res)=>{
    quotes = quotes.filter((quote,id)=>{
        return id!=req.params.id;
    })
    res.send('deleted quote sucessfully')
})
router.patch("/:id",(req,res)=>{
    let quoteToUpdate = quotes[req.params.id];
    const {quote,author} = req.body;
    if(quote){
        quoteToUpdate.quote=quote;
    }
    if(author){
        quoteToUpdate.author=author;
    }
    quotes[req.params.id]=quoteToUpdate;
    res.send('updated sucessfully')
 

})
export default router;
