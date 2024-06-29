
import React from 'react';
import Image from 'next/image';



const ProductCard = ({ title, description, imageSrc, shopNowLink }) => {
  return (
    <div className="flex flex-col p-4 md:w-1/2 xl:w-1/3">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href={shopNowLink} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Shop Now</a>
    </div>
  );
};

const ProductGallery = () => {
  const products = [
    {
      title: 'Long Sofa',
      description: 'Structure almost highlights',
      imageSrc:'image/pic1.jpg' ,
      shopNowLink: '/sofa',
    },
    {
      title: 'Dining Chair',
      description: 'Structure almost highlights',
      imageSrc: 'image/pic2.jpg',
      shopNowLink: '/chair',
    },
    {
        title: 'Dining Chair',
        description: 'Structure almost highlights',
        imageSrc: 'image/img5.jpg',
        shopNowLink: '/chair',
      },
      {
        title: 'Dining Chair',
        description: 'Structure almost highlights',
        imageSrc: 'image/pic4.jpg',
        shopNowLink: '/chair',
      },
      {
      title: 'Dining Chair',
      description: 'Structure almost highlights',
      imageSrc: 'image/pic5.jpg',
      shopNowLink: '/chair',
    },
    {
        title: 'Dining Chair',
        description: 'Structure almost highlights',
        imageSrc: 'image/pic6.jpg',
        shopNowLink: '/chair',
      },
      
  ];

  return (
    <div className="flex flex-wrap -mx-4 al align-center">
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  );
};

export default ProductGallery;







