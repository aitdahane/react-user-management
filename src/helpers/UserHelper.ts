import { User } from '../types';

export class UserHelper {
    public static getFullName(user: User): string {
        return `${user.name.first} ${user.name.last}`;
    }

    public static getPicture(user: User): string {
        return user.picture;
    }
}