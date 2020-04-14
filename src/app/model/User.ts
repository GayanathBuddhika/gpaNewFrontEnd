import { Faculty } from './Faculty';
import { Department } from './Department';

export class User{
    id: string;
    ai: string;   
    email: string;
    role: string;   
    name: string;  
    phoneNumber: string;
    department: Department;
    faculty: Faculty;
    password:string;
    edit: Boolean;
}
