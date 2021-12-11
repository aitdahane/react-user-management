import { User } from '../types';
import { ApiAdapter } from './ApiAdapter';

export class UserApiAdapter extends ApiAdapter {
    public static getAll(): Promise<User[]> {
        return super.fetch<User[]>('/users', 'GET')
    }

    public static get(id: string): Promise<User> {
        return super.fetch<User>(`/users/${id}`, 'GET');
    }

    public static create(user: Partial<User>): Promise<User> {
        return super.fetch<User>('/users', 'POST', user);
    }

    public static update(id: string, user: Partial<User>): Promise<User> {
        return super.fetch<User>(`/users/${id}`, 'PUT', user);
    }

    public static delete(id: string): Promise<User> {
        return super.fetch<User>(`/users/${id}`, 'DELETE');
    }
}