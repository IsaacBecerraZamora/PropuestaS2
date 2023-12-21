export interface DatosCardGenerales {
   
        idcredito: string;
        tipo: string;
        numero1: string;
        numero2: string;
        porcentaje: string;
        vencimiento: string;
}
    
export default function initDatosCardGenerales(options?: Partial<DatosCardGenerales>): DatosCardGenerales {

    const defaults = {

        idcredito: "",
        tipo: "",
        numero1: "",
        numero2: "",
        porcentaje: "",
        vencimiento: "",

    }

    return {
        ...defaults,
        ...options,
    };

}

