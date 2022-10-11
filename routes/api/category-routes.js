const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


  // find all categories
  // be sure to include its associated Products
  router.get('/', async (req, res) => {
   try {
    const categoryData = await Category.findAll({
      include: [{model: Product}],
    });
      res.status(200).json(categoryData)
  } catch(err) {
    res.status(500).json(err);
  }
  });


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
  const singleCategoryData = await Category.findByPk(req.params.id, {
    include: [{model: Product}]
  });
  if (!singleCategoryData) {
    res.status(404).json({message: 'No category was found with this id.'});
    return;
  }
  res.status(200).json(singleCategoryData);
} catch (err) {
  res.status(500).json(err);
}
});

router.post('/', async (req, res) => {
  // create a new category
 try {
  const newCategory = await Category.create(req.body);
  res.status(200).json(newCategory)
 } catch (err) {
  res.status(400).json(err);
 }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if(!updateData) {
      res.status(404).json({message: 'No category was found with this id.'})
      return;
    }
    res.status(200).json(updateData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
try {
  const deleteCategory = await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  if (!deleteCategory) {
    res.status(404).json({message: 'No category was found with that id.'});
    return;
  }
  res.status(200).json(deleteCategory);
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;
