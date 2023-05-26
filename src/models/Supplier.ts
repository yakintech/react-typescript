export interface Supplier{
    id:number;
    companyName: string;
    contactName: string;
    contactTitle:string;
    address:Address
}


export interface Address {
    street:string;
    city:string;
    country:string
}