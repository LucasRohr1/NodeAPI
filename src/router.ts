import {Router} from 'express';
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from './modules/middleware';
import { createProduct, deleteProduct, getOneProduct } from './handlers/product';
import { getProducts } from './handlers/product';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';

const router = Router();

/**
 * Product
 */

router.get('/product', getProducts);

router.get('/product/:id', getOneProduct);

router.post('/product', body('name').isString(), handleInputErrors, createProduct);

router.put('/product/:id', body('name').isString(), handleInputErrors,(req, res) => {

     
});


router.delete('/product/:id', deleteProduct);


/**
 * Update 
 */

router.get('/update', getUpdates );
router.get('/update/:id', getOneUpdate);
router.put('/update/:id',   
        body('title').optional(), 
        body('body').optional(), 
        body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
        body('version').optional(),
        updateUpdate
);

router.post('/update', 
        body('title').exists().isString(), 
        body('body').exists().isString(), 
        body('productId').exists().isString(),
        createUpdate
)

router.delete('/update/:id', deleteUpdate);

/**
 * UpdateItem
 */

router.get('/updateitem', () => {});
router.get('/updateitem/:id', () => {});

router.put('/updateitem/:id', 
    body('name').optional().isString(), 
    body('description').optional().isString(),
    () => {});

router.post('/updateitem', 
    body('name').isString(), 
    body('description').isString(),
    body('updateId').exists().isNumeric(),
    () => {});

router.delete('/updateitem/:id', () => {});

router.use((error, req, res, next) => {

    console.log(error);
    res.status(500).json({ Message: 'Internal Server Error' });
});

export default router;
