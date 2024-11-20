"use client"
import Image from "next/image";
import { useState } from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { IoTrashBinOutline } from "react-icons/io5";

function CartModal({ setCartOpen }) {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "ساعت کلاسیک",
      price: "670,000 تومان",
      amount: 1,
      image: "/placeholder-image.webp",
    },
    {
      id: 2,
      name: "ساعت دیجیتال",
      price: "450,000 تومان",
      amount: 1,
      image: "/placeholder-image.webp",
    },
  ]);
  const incrementAmount = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, amount: order.amount + 1 } : order
      )
    );
  };

  const decrementAmount = (id) => {
    setOrders(
      orders
        .map((order) =>
          order.id === id
            ? { ...order, amount: Math.max(order.amount - 1, 0) }
            : order
        )
        .filter((order) => order.amount > 0)
    );
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()} // Prevent click propagation to the overlay
      className="absolute top-[4rem] left-1/2 transform -translate-x-1/2 md:left-4 md:translate-x-0  w-full max-w-md bg-white shadow-md p-4  z-20 rounded-md"
    >
      <h3 className="mb-2 text-lg text-center font-bold">سبد خرید</h3>
      {orders.length > 0 ? (
        <ul className="space-y-2">
          {orders.map((order) => (
            <li
              key={order.id}
              className="flex justify-between items-center p-2 border-b"
            >
              <Image
                src={order.image}
                alt={order.name}
                width={48}
                height={48}
                className=" rounded-md ml-4"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{order.name}</p>
                <p className="text-sm text-gray-600">{order.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decrementAmount(order.id)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <CiSquareMinus size={24} />
                </button>
                <span>{order.amount}</span>
                <button
                  onClick={() => incrementAmount(order.id)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <CiSquarePlus size={24} />
                </button>
              </div>
              <button
                onClick={() => deleteOrder(order.id)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                <IoTrashBinOutline size={20} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-8 space-y-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-3xl">🛒</span>
          </div>
          <h4 className="text-lg font-bold">سبد خرید شما خالی است.</h4>
          <p className="text-gray-600">
            با انتخاب محصولات برای خرید میتوانید در این قسمت آن ها را مشاهده کنید
          </p>
          <button
            onClick={() => setCartOpen(false)}
            className="px-4 py-2 mt-4 bg-blue-600 text-white rounded-full"
          >
            ادامه خرید
          </button>
        </div>
      )}
    </div>
  );
}

export default CartModal;
