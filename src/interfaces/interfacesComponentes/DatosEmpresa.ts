export interface DatosEmpresa {

    sucursal: string,
    dirección: string,
    colonia: string,
    ciudad: string,
    estado: string,
    cp: string,
    teléfono: string,
    correo: string,
}
export default function initDatosEmpresa(options?: Partial<DatosEmpresa>): DatosEmpresa {

    const defaults = {

        sucursal: "",
        dirección: "",
        colonia: "",
        ciudad: "",
        estado: "",
        cp: "",
        teléfono: "",
        correo: "",

    }

    return {
        ...defaults,
        ...options,
    };

}

