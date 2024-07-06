export interface IUser extends Document {
    name: string;
    usernames: string;
    email: string;
    password: string;
}