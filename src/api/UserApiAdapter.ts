import { User } from '../types';
import { ApiAdapter } from './ApiAdapter';

export class UserApiAdapter extends ApiAdapter {
    public static getUsers(): Promise<User[]> {
        return super.fetch<User[]>('/users')
    }
}