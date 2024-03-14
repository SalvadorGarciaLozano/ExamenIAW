import { IProducto } from '@/interfaces/IProductos';
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import React, { FC } from 'react'

interface Props {
    productos: IProducto;
}

export const ProductosCard: FC<Props> = ({ productos }) => {
    return (
        <section className='sct'>
            <div className="card">
                <div className="card-header">
                    <h2>{productos.codigo}</h2>
                    <h2>{productos.nombre}</h2>
                    <h6>{productos.stock}</h6>
                    <h6>{productos.pvp}</h6>
                    <h6>{productos.proveedor}</h6>
                    <h6>{productos.gama.nombre}</h6>
                </div>
                <div className="card-body">
                    <img
                        alt="Cargando imagen..."
                        className="product-image"
                        src={`http://192.168.8.88:3001/img/productos/${productos.imagen}`}
                    />
                </div>
                <div className="card-footer">
                    <button className="button">Ver Detalle</button>
                </div>
            </div>
        </section>
    );
};