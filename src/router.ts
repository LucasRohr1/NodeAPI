import {Router} from 'express';
import { body, validationResult } from "express-validator";

const router = Router();

/**
 * Product
 */

router.get('/product', (req, res) => {
    res.json({
        message: req.shhh_secret})

});
router.get('/product/:id', () => {});

router.put('/product/:id', body('name').isString(),(req, res) => {

    const errors = validationResult(req);
    console.log(errors);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ message: "ok" });            
});

router.post('/product', () => {});
router.delete('/product/:id', () => {});


/**
 * Update 
 */

router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id', () => {});
router.post('/update', () => {});
router.delete('/update/:id', () => {});

/**
 * Update Item
 */

router.get('/updateitem', () => {});
router.get('/updateitem/:id', () => {});
router.put('/updateitem/:id', () => {});
router.post('/updateitem', () => {});
router.delete('/updateitem/:id', () => {});



export default router;
