import apiProductos from '@/model/productos/apiproductos';
import React from 'react'
import { ProductoDetail } from '../details';

const ProductoPage = async ({ params: { id } }: { params: { id: string } }) => {

  const producto = await apiProductos.detalle(id);

  return (
    <section className="container mx-auto px-4 mt-6 border min-h-screen">
        <ProductoDetail producto={producto} />
    </section>
  )
}

export default ProductoPage