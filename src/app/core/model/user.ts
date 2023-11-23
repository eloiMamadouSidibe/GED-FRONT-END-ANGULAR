export class User{
    id_token!: string
    id?: number | null;
    login!: string;
    firstName?: string | null;
    lastName?: string | null;
    activated?: boolean;
    authorities?: string[];
    createdBy?: string;
    createdDate?: Date;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
    email?: string;
    imageUrl?: string

}