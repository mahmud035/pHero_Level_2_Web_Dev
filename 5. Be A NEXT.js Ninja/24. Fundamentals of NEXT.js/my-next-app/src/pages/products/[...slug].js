import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {
  const router = useRouter();

  console.log(router.query.slug);

  return (
    <div>
      <h1>Product details page: </h1>
    </div>
  );
};

export default ProductDetails;
