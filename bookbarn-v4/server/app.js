const express = require('express');
const app = express();
const cors = require('cors');
const models = require('./models');

app.use(express.json())
app.use(cors())

app.get('/books', (req,res) => {

    models.Book.findAll().then(books => {
        res.json(books)
    })

})

app.post('/add-book',(req,res) => {
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imageurl = req.body.imageurl

    let book = models.Book.build({
        title: title,
        genre: genre,
        publisher: publisher,
        year: year,
        imageurl: imageurl
    })

    book.save().then((savedBook) => {
        res.json({success: true})
    })

})

app.post('/delete-book',async (req,res) => {
    let id = parseInt(req.body.id)

    models.Book.destroy({
        where: {
            id: id
        }
    }).then(() => {
        console.log()
        res.json({deleted: true})
    })

})

// app.delete("/books/delete/:id", async (req, res, next) => {
//     const id = req.params.id;
//     const deleteBook = await models.Book.destroy({
//       where: {
//         id
//       }
//     });
//     try {
//       res.json(deleteBook);
//     } catch (error) {
//       res.json(error);
//     }
//   });


app.get('/update-book/:bookId', (req,res) => {
    let bookId = parseInt(req.params.bookId)


    models.Book.findOne({
        where: {
            id: bookId
        }
    }).then(book => {
        res.json(book)
    })
})

app.post('/update-book', (req,res) => {
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imageurl = req.body.imageurl
    let bookId = req.body.bookId

    models.Book.update({
        title: title,
        genre: genre,
        publisher: publisher,
        year: year,
        imageurl: imageurl
    },
        {
            where: {
            id: bookId
        }
    })
    res.json({success: true})
})

app.listen(3001,() => {console.log('Server is running...')})
