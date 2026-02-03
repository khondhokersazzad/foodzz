import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";
import { use, useContext } from "react";
import { CartContext } from "@/context/CartProvider";

const CartItemCard = ({ item}) => {
  const {cart, increaseQty, decreaseQty, removeFromCart} = use(CartContext);
  console.log(cart)
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex gap-3 hover:border-red-600/40 transition">

      {/* Image */}
      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
        <Image
          src={item?.foodImg}
          alt={item?.title}
          unoptimized
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-sm font-semibold text-white line-clamp-1">
            {item.title}
          </h4>
          <p className="text-xs text-gray-400 mt-0.5">
            ৳{item.price} each
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-2">
          {/* Quantity Control */}
          <div className="flex items-center gap-2 bg-black rounded-lg px-2 py-1 border border-zinc-800">
            <button
              onClick={()=>decreaseQty(item.id)}
              className="text-gray-400 hover:text-white transition"
            >
              <Minus size={14} />
            </button>

            <span className="text-sm text-white font-medium">
              {item.quantity}
            </span>

            <button
              onClick={() => increaseQty(item.id)}
              className="text-gray-400 hover:text-white transition"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Remove */}
          <button
            onClick={()=>removeFromCart(item.id)}
            className="text-red-500 hover:text-red-600 transition"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
