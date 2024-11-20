"use client";
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
    <div className="bg-gray-50 p-4 py-8">
      <div>
        <h2 id="reviews-heading" className="text-2xl font-bold mb-4">
          نظرات مشتریان
        </h2>
        <div className="flex flex-col-reverse sm:grid sm:grid-cols-2">
          <div className="relative overflow-hidden h-96">
            {/* Top Fade Effect */}
            <div>
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none z-10"></div>
              <div
                className="absolute top-0 animate-scroll space-y-4"
                style={{ whiteSpace: "nowrap" }}
              >
                {[...reviews, ...reviews].map((review, index) => (
                  <div
                    key={`${review.id}-${index}`}
                    className="flex flex-col sm:flex-row bg-white p-4 rounded-md shadow mb-4"
                  >
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
          <section className=" px-4 lg:px-16 rounded-lg">
            <div className=" mx-auto text-center">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-blue-700 mb-6">
                زیبایی بخش ساعت های زندگی شما
              </h2>
              <p className="text-lg lg:text-2xl text-gray-700 mb-8">
                ما به اعتماد شما افتخار می‌کنیم و بهترین ساعت‌ها را با کیفیت
                بالا و تضمین قیمت مناسب ارائه می‌دهیم. صدها1 مشتری راضی،
                تجربه‌ای بی‌نظیر را با ما به اشتراک گذاشته‌اند.
              </p>
            </div>
          </section>
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
