import axios from 'axios';
import { IUser } from '../models/IUser';

export class UserService{
    private static serverURL: string = `https://jsonplaceholder.typicode.com`;

    public static getAllUsers(){
        let dataURL:string = `${this.serverURL}/users`;
        return axios.get<IUser[]>(dataURL);
    }
}