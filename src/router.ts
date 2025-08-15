import {Router} from 'express';
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from './modules/middleware';
import { createProduct, getOneProduct } from './handlers/product';
import { getProducts } from './handlers/product';

const router = Router();

/**
 * Product
 */

router.get('/product', getProducts);

router.get('/product/:id', () => {});

router.post('/product', body('name').isString(), handleInputErrors, createProduct);

router.put('/product/:id', body('name').isString(), handleInputErrors,(req, res) => {

     
});


router.delete('/product/:id', () => {});


/**
 * Update 
 */

router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id',   
        body('title').optional(), 
        body('body').optional(), 
        body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
        body('version').optional(),
        () => {}
);

router.post('/update', 
        body('title').exists().isString(), 
        body('body').exists().isString(), 
        () => {}
)

router.delete('/update/:id', () => {});

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



export default router;
