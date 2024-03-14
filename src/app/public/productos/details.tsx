import React from 'react';
import { IProducto } from '@/interfaces/IProductos';
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { FC } from 'react';

interface Props {
  producto: IProducto;
}
  
export const ProductoDetail: FC<Props> = ({ producto }) => {
  return (
    <Card className="producto-detail-card">
      <CardHeader className="producto-detail-header">
        <h1 className='producto-detail-title'>{producto.nombre}</h1>
      </CardHeader>
      <CardBody className="producto-detail-body">
        <div className="producto-detail-image-container">
          <Image
            alt="Product Image"
            className="producto-detail-image"
            src={`http://192.168.8.88:3001/img/productos/${producto.imagen}`}
            width={270}
          />
        </div>
        <div className="producto-detail-info">
          <h2>Código: {producto.codigo}</h2>
          <h3>Gama: {producto.gama.nombre}</h3>
        </div>
      </CardBody>
      <CardFooter className="producto-detail-footer">
        <h3>Precio: ${producto.pvp}</h3>
        <button className="comprar-button">Comprar</button>
      </CardFooter>
    </Card>
  );
};