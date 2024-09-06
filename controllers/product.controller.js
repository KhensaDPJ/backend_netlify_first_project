import productRepo from "../repository/product.repo.js"
import validator from 'validator'

export default {
    async productList(req, res) {
        try {
            const product = await productRepo.productList();
            if (product.error) return res.status(500).send({ message: product.error });
            res.status(200).send(product.data);
        } catch (error) {
            res.status(500).send({ message: 'List all product have error :', error });
        }
    },
    async addProduct(req, res) {
        try {
            const { name, qty, price } = req.body;
            if (validator.isAlpha(name)) {
                return res.status(400).send({ message: 'Product name is required. Please enter a valid product name.' });
            }
            if (!validator.isInt(qty.toString())) {
                return res.status(400).send({ message: 'Product quantity is required and must be a number.' });
            }
            if (!validator.isInt(price.toString())) {
                return res.status(400).send({ message: 'Product price is required and must be a number.' });
            }
            const product = {
                name,
                qty: parseInt(qty, 10),
                price: parseInt(price, 10)
            };
            const result = await productRepo.addProduct(product);

            if (result.error) {
                return res.status(500).send({ message: result.error });
            }

            return res.status(200).send({
                message: 'Insert product successfully.',
                product: result.data
            });
        } catch (error) {
            console.error('Error creating product:', error);
            return res.status(500).send({ message: 'An unexpected error occurred.' });
        }
    },
    async updateProduct(req, res) {
        try {
            const { id, name, qty, price } = req.body;

            if (!validator.isInt(id.toString())) return res.status(400).send({ message: 'Product id is required. Please enter a valid product id.' });

            if (validator.isAlpha(name)) return res.status(400).send({ message: 'Product name is required. Please enter a valid product name.' });

            if (!validator.isInt(qty.toString())) return res.status(400).send({ message: 'Product quantity is required and must be a number.' });

            if (!validator.isInt(price.toString())) return res.status(400).send({ message: 'Product price is required and must be a number.' });

            const product = {
                id: parseInt(id, 10),
                name,
                qty: parseInt(qty, 10),
                price: parseInt(price, 10)
            };
            const result = await productRepo.updateProduct(product);

            if (result.error) {
                return res.status(500).send({ message: result.error });
            }

            return res.status(200).send({
                message: 'Update product successfully.',
                product: result.data
            });
        } catch (error) {
            return res.status(500).send({ message: 'An unexpected error occurred.' });
        }
    },
    async deleteProduct(req, res) {
        try {
            const {id} = req.params;
            if (!validator.isInt(id.toString())) return res.status(400).send({ message: 'Product id is required. Please enter a valid product id.' });
            const result = await productRepo.deleteProduct(parseInt(id, 10));
            if (result) return res.status(400).send({ message: 'An unexpected error occurred.', result });
            res.status(200).send({ message: 'Delete product successfully' });
        } catch (error) {
            return res.status(500).send({ message: 'An unexpected error occurred. ',error});
        }
    }
}