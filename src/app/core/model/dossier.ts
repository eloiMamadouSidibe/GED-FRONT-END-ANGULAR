import { Boite } from "./boite"
import { Process } from "./process"
import { Service } from "./service"
import { SousService } from "./sous-service"
import { TypeDocument } from "./type-document"

export class Dossier{
    id!: number
    code!: string
    motCle!: string
    dateProduction!: Date
    typeDocument!: TypeDocument
    boite!: Boite
    process!: Process
    service!: Service
    sousService!: SousService
    

}