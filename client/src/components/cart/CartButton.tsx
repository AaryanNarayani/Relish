import { ShoppingCart } from "lucide-react"
import { color, delay, motion } from 'framer-motion'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CartButton() {

    const [isOpen, setIsOpen] = useState('false');
    const navigate = useNavigate();
 
    const variants : any = {
        false : { x : '0px' },
        true : { width : '4000px', height : '4000px', opacity : 1 , bottom : -2000 , right : -2000 , backgroundColor : 'var(--ternary)'},
    }

    const handleClick = () => {
        setIsOpen('true')
        setTimeout(() => {
            navigate('/cart')
        },900)
    }

  return (
    <motion.button className={`fixed bottom-10 right-10 bg-[--primary] p-4 ${ 'rounded-full'} text-[--secondary]hover:bg-opacity-90 transition-colors duration-1000`} onClick={handleClick}
        variants={variants}
        animate={variants[isOpen]}
        transition={{ ease: "easeOut", duration: 0.7 }}
    >
        {
            isOpen === 'false' &&
            <ShoppingCart />
        }
    </motion.button>
  )
}

export default CartButton