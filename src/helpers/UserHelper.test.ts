import { UserHelper } from './UserHelper';
import { User } from '../types';

describe('UserHelper tests', () => {
  const user: User = {
    id: '1',
    picture: 'picture moh',
    name: { first: 'Moh', last: 'Dah'},
  };

  test('getFullName', () => {
    expect(UserHelper.getFullName(user)).toEqual('Moh Dah');
  });

  test('getFirstName', () => {
    expect(UserHelper.getFirstName(user)).toEqual('Moh');
  });

  test('getLastName', () => {
    expect(UserHelper.getLastName(user)).toEqual('Dah');
  });

  test('getPicure', () => {
    expect(UserHelper.getPicture(user)).toEqual('picture moh');
  });
});
