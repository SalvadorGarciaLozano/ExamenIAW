import { IProducto } from "@/interfaces/IProductos";


const apiBD = 'http://192.168.8.88:3001/api';
const apiProductos = {

    listar: async (): Promise<IProducto[]> => {
        const ruta = `${apiBD}/productos`;
        const productos = await fetch(`${ruta}`, { cache: 'no-store'})
        //este res.json transforma el string en formato json que llega desde internet a un array javascript en formato json
            .then((res) => res.json())
        return productos
    },

    detalle: async (id: IProducto["codigo"]): Promise<IProducto> => {
        const ruta = `${apiBD}/productos/${id}`;
        const producto = await fetch(`${ruta}`, { cache: 'no-store'})
            .then((res) => res.json())
        return producto
    }
}
export default apiProductos