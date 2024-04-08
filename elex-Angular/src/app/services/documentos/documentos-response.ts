// Generated by https://quicktype.io

export interface Documentos {
    id:          number;
    nombre:      string;
    descripcion: string;
    fecha:       string;
    archivo:     Blob;
    tipo:        Tipo;
}

export interface Tipo {  // Actuaciones
    id:          number;
    nombre:      string;
    fecha:       string;
    descripcion: string;
    estado:      boolean;
    expediente:  TipoExpediente;
}

export interface TipoExpediente { // Expedientes
    id:           number;
    fecha:        string;
    numero:       string;
    materia:      string;
    estado:       boolean;
    responsable:  string;
    responsable2: string;
    descripcion:  string;
    condicion:    string;
    precio:       number;
    consejeria:   string;
    expediente:   ExpedienteExpediente;
}

export interface ExpedienteExpediente { // Tipos Expedientes
    id:     number;
    nombre: string;
}
