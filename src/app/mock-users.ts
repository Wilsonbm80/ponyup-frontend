import {User} from './user';

export const USERS: User[] = [
    {
        id: 1, 
        name: "Horris Runsley", 
        balance: 10000, 
        numberOfPayableRequests: 1, 
        numberOfReceivableRequests: 0
    },
    {
        id: 2,
        name: "Whinney Neighbor", 
        balance: 20000, 
        numberOfPayableRequests: 1,
        numberOfReceivableRequests: 1
    },
    {
        id: 3, 
        name: "Trotsky Saddleback", 
        balance: 30000, 
        numberOfPayableRequests: 2, 
        numberOfReceivableRequests: 1
    },
    {
        id: 4, 
        name: "Muzzle Canters", 
        balance: 30000, 
        numberOfPayableRequests: 2, 
        numberOfReceivableRequests: 1
    }
]