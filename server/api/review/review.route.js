const
  router = require('express').Router(),
  Review = require('./review.model')

// I guess these routes should exist under products/:id/reviews

router
  .get('/', (req, res, next) => {
    Review.findAll({ order: ['id'] })
    .then(res.status(200).json)
    .catch(next)
  })

  .post('/', (req, res, next) => {
    Review.create(req.body)
    .then(res.status(201).json)
    .catch(next)
  })

  .put('/:id', (req, res, next) => {
    Review.findById(req.params.id)
    .then(product => product.update(req.body))
    .then(res.status(200).json)
    .catch(next)
  })

  .delete('/:id', (req, res, next) => {
    Review.findById(req.params.id)
    .then(product => product.destroy())
    .then(res.status(204).end)
    .catch(next)
  })

module.exports = router
