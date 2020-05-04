export interface User{
    id: number;
    name: string;
    balance: number;
    numberOfPayableRequests: number; 
    numberOfReceivableRequests: number;
}