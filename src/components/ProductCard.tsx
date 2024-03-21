import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai"
import { useAppDispatch } from '../redux/hooks'
import { addToCart } from '../redux/slice/cartSlice'
import { toast } from 'react-toastify'

interface propsType {
    id: number,
    title: string,
    image: string,
    category: string,
    price: string,
    description: string
}
const ProductCard = ({ id, title, image, category, price }: propsType) => {
    const dispatch=useAppDispatch();
    const addProductToCart=()=>{
        const payload={
            id,
            image,
            title,
            price:parseFloat(price),
            quantity:1
        }
        dispatch(addToCart(payload));
        toast.success("Added to cart");
    }
    return (
        <div className='border border-gray-200 flex-col grow'>
            <div className="text-center border-b border-gray-200">
                <img src={image} className='inline-block' alt="" />
            </div>
            <div className='px-8 py-4 flex-col align-bottom'>
                <div className="flex items-center gap-x-8">
                    <p className="text-grey-500 text-sm font-medium">{category}</p>
                    <h2 className='font-medium'>{title}</h2>
                </div>

                <div className='mt-3 flex items-center justify-between text-[#ffb21d] w-[85%]'>
                    <div className="flex items-center">
                        <div className="flex">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p className='text-gray-600 text-sm ml-2'>(3 review)</p>
                        <div className=''>
                            <h2 className='font-medium text-sky-500 text-xl'>${price}</h2>
                        </div>
                    </div>
                </div>

                <button onClick={addProductToCart} className="flex w-full gap-x-3 justify-center rounded-lg items-center bg-sky-500 text-white px-4 py-2 cursor-pointer hover:bg-sky-600 ">
                    <AiOutlineShoppingCart className='text-2xl' />Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard