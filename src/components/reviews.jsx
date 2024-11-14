import { HiStar } from "react-icons/hi2";

const reviews = [
  {
    id: 1,
    title: "این بهترین ساعت است که تا به حال داشته‌ام",
    rating: 5,
    content: `
      <p>ارسال سریع و به موقع، با تشکر فراوان از تیم پشتیبانی دکتر واچ</p>
    `,
    author: "علی احمدی",
    avatarSrc:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    title: "عملکرد دقیق و طراحی مدرن",
    rating: 4,
    content: `
      <p>در تنوع و قیمت نامبر وان هستید</p>
    `,
    author: "مینا رضایی",
    avatarSrc:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
  },
  {
    id: 3,
    title: "ساعت اسپرت و کاربردی",
    rating: 5,
    content: `
      <p>برای روز پدر ازشون خرید کردم و خدارشکر راضی بودند</p>
    `,
    author: "رضا کریمی",
    avatarSrc:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Reviews() {
  return (
    <div className="bg-gray-100 p-4 pt-8">
      <div>
        <h2 id="reviews-heading" className="text-2xl font-bold mb-4">
          نظرات مشتریان
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col sm:flex-row bg-white p-4 rounded-md shadow">
              <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
                <h3 className="text-sm font-medium text-gray-900">
                  {review.title}
                </h3>
                <p className="sr-only">{review.rating} out of 5 stars</p>

                <div
                  dangerouslySetInnerHTML={{ __html: review.content }}
                  className="mt-3 space-y-6 text-sm text-gray-600"
                />
              </div>

              <div className="order-1 flex items-center sm:flex-col sm:items-start">
                <img
                  alt={`${review.author}.`}
                  src={review.avatarSrc}
                  className="h-12 w-12 rounded-full"
                />

                <div className="ml-4 sm:ml-0 sm:mt-4">
                  <p className="text-sm font-medium text-gray-900">
                    {review.author}
                  </p>
                  <div className="mt-2 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <HiStar
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          review.rating > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
