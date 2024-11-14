import React from 'react'

function CostumerReviews() {
    const reviews = [
        {name:"سارا ملکیان",
            review:"ارسال سریع و به موقع، با تشکر فراوان از تیم پشتیبانی دکتر واچ",
            rate:5,
        },
        {name:"مهرداد قوچان نژاد",
            review:"در تنوع و قیمت نامبر وان هستید",
            rate:4.3,
        },  {name:"مریم صابری",
            review:"برای روز پدر ازشون خرید کردم و خدارشکر راضی بودند",
            rate:4.6,
        },  
    ]
  return (
<section className="p-4">
        <h3 className="mb-2 text-lg font-bold">نظرات مشتریان</h3>
        <div className="space-y-4">
          {reviews.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-md shadow">
              <p className="text-sm font-medium">{item.name}</p>
              <div className='mt-1'>{item.rate}</div>
              <p className="mt-1 text-sm text-gray-600">
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default CostumerReviews