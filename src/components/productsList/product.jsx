const products = [
    {
      id: 1,
      name: 'Zip Tote Basket',
      availableColors: [
        { name: 'Black', colorBg: '#111827' },
        { name: 'Brass', colorBg: '#FDE68A' },
        { name: 'Chrome', colorBg: '#E5E7EB' },
      ],
      href: '/product/1',
      imageSrc: '/placeholder-image.webp',
      imageAlt: 'ساعت کلاسیک',
      price: '200,000 تومان',
    },
    {
        id: 2,
        name: 'Zip Tote Basket',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
        href: '/product/1',
        imageSrc: '/placeholder-image.webp',
        imageAlt: 'ساعت کلاسیک',
        price: '200,000 تومان',
      },{
        id: 3,
        name: 'Zip Tote Basket',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
        href: '/product/1',
        imageSrc: '/placeholder-image.webp',
        imageAlt: 'ساعت کلاسیک',
        price: '200,000 تومان',
      },{
        id: 4,
        name: 'Zip Tote Basket',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
        href: '/product/1',
        imageSrc: '/placeholder-image.webp',
        imageAlt: 'ساعت کلاسیک',
        price: '200,000 تومان',
      },{
        id: 5,
        name: 'Zip Tote Basket',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
        href: '/product/1',
        imageSrc: '/placeholder-image.webp',
        imageAlt: 'ساعت کلاسیک',
        price: '200,000 تومان',
      },{
        id: 6,
        name: 'Zip Tote Basket',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
        href: '/product/1',
        imageSrc: '/placeholder-image.webp',
        imageAlt: 'ساعت کلاسیک',
        price: '200,000 تومان',
      },{
        id: 7,
        name: 'Zip Tote Basket',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
        href: '/product/1',
        imageSrc: '/placeholder-image.webp',
        imageAlt: 'ساعت کلاسیک',
        price: '200,000 تومان',
      },
    // More products...
  ]
  
  export default function Product() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
          <div className=" grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4 flex justify-between items-center">
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    <ul role="list" className="mt-auto flex items-center justify-center gap-x-3">
                    {product.availableColors.map((color) => (
                      <li
                        key={color.name}
                        style={{ backgroundColor: color.colorBg }}
                        className="h-4 w-4 rounded-full border border-black border-opacity-10"
                      >
                        <span className="sr-only">{color.name}</span>
                      </li>
                    ))}
                  </ul>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">{product.price}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Add to bag<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  