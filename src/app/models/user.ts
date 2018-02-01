export class User {
    _id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: string = 'ROLE_USER';
    image: string;
}
