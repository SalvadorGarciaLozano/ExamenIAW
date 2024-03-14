export interface IProducto {
    codigo:      string;
    nombre:      string;
    codgama:     string;
    descripcion: string;
    proveedor:   string;
    stock:       number;
    pvp:         number;
    pcoste:      number;
    imagen:      string;
    gama:        IGama;
}

export interface IGama {
    nombre:      string;
    descripcion: string;
    imagen:      string;
}