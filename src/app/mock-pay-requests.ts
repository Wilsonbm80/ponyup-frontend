import {PayRequest} from './pay-request';

export const PAYREQUESTS: PayRequest[] = [
    {
        id: 1, 
        invoicer: "Whinney Neighbor",
        invoicee: "Trotsky Saddleback",
        amount: 400,
        dateCreated: "2020-05-03"
    },
    {
        id: 2, 
        invoicer: "Trotsky Saddleback",
        invoicee: "Horris Runsley",
        amount: 500,
        dateCreated: "2020-05-04"
    },
    {
        id: 3, 
        invoicer: "Trotsky Saddleback",
        invoicee: "Whinney Neighbor",
        amount: 600,
        dateCreated: "2020-05-02"
    }
]