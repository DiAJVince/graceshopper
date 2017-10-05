const
  router = require('express').Router(),
  Review = require('./review.models')

// I guess these routes should exist under products/:id/reviews

router
  .get('/', (req, res, next) => {
    Review.findAll({ order: ['id'] })
    .then(res.json)
    .catch(next)
  })

  .post('/', (req, res, next) => {
    Review.create(req.body)
    .then(res.json)
    .catch(next)
  })

  .put('/:id', (req, res, next) => {
    Review.findById(req.params.id)
    .then(product => product.update(req.body))
    .then(res.json)
    .catch(next)
  })

  .delete('/:id', (req, res, next) => {
    Review.findById(req.params.id)
    .then(product => product.destroy())
    .then(res.json)
    .catch(next)
  })

module.exports = router
