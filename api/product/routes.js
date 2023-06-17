const router = require('express').Router();
const controller = require('./controller');
const SchemaProduct = require('./schema');
const { auth, validation } = require('../../middleware');

router.get(
  '/list',
  controller.getList
);

router.get(
  '/:id',
  controller.getDetail
);

router.post(
  '/create',
  auth.authenticate(),
  validation.validate({ schema: SchemaProduct.CreateProduct }),
  controller.create
)
  
router.put(
  '/update/:id',
  auth.authenticate(),
  validation.validate({ schema: SchemaProduct.CreateProduct }),
  controller.update
)

router.delete(
  '/delete/:id',
  auth.authenticate(),
  controller.remove
)


module.exports = router;