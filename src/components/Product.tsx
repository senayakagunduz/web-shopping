import { useEffect, useState } from 'react'
import { getProducts } from '../services/product'
import { ProductItem } from '../interface/ProductItem'
import ProductCard from './ProductCard'

const Product = () => {
    const [data, setData] = useState<ProductItem[]>([])
    const loadData = async () => {
        try {
            const resp = await getProducts();
            setData(resp);

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        loadData();
    }, [])
    console.log(data, "data");
    return (
        <div className='container mt-32'>
            <div className="sm:flex justify-between items-center">
                <h2 className='text-4xl font-medium'>Products</h2>
                <div className='text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0'>
                    <div className="text-black">New</div>
                    <div>Featured</div>
                    <div>Top Sellers</div>
                </div>
            </div>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>
                {
                    data.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            category={product.category}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                        />))
                }
            </div>
        </div>
    )
}

export default Product