"use client";
const RotatingWatch = () => {
  return (
    <div className="relative my-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto aspect-square overflow-clip">
    {/* Rotating Text */}
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full animate-spin-slow"
      >
        <defs>
          <path
            id="circlePath"
            d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
          ></path>
        </defs>
        <text fill="#000" fontSize="20" fontWeight="bold">
          <textPath href="#circlePath" startOffset="0" textAnchor="middle">
            BUY NOW - BUY NOW - BUY NOW - BUY NOW - BUY NOW - BUY NOW - BUY NOW
            - BUY NOW - BUY NOW - BUY NOW - BUY NOW - BUY NOW - BUY NOW - BUY
            NOW - BUY NOW - BUY NOW - BUY NOW - BUY NOW - BUY NOW - BUY NOW -
            BUY NOW - BUY NOW - BUY NOW -
            </textPath>
          </text>
        </svg>
      </div>

      {/* Centered Watch */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://img2.storyblok.com/0x638/filters:quality(85):format(webp)/f/160527/688x900/1e0f5a14e7/bugattti_cle_about.png"
          alt="Central Image"
          className="w-1/2 sm:w-2/5  rounded-full animate-spin-reverse-slow"
        />
      </div>


      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 36s linear infinite;
        }

        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 46s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RotatingWatch;
