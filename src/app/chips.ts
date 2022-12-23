export interface Chips {
    _id?: string,
    nom: string,
    description: string,
    marque: string,
    lipides: number,
    glucides: number,
    proteines: number,
    fibres: number,
    sucres: number,
    fer: number,
    ingredients: [string],
    discontinue?: boolean,
    dateCreationMarque?: Date,
    telephone?: string,
    createurInformation?:[object]
}

