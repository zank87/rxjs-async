import { IUser } from 'src/app/models/user/user.model';

export const mockUsers: IUser[] = [
  {
    firstName: 'John',
    lastName: 'Zank',
    email: 'jz@thebest.com',
    birthDate: new Date('11-29-1987'),
    bio: 'He\'s really great.',
    profilePictureURL: 'assets/mock-data/john-img.jpg',
    followerCount: 234
  },
  {
    firstName: 'Cloud',
    lastName: 'Strife',
    email: 'c_strife@avalanche.com',
    birthDate: new Date('03-09-1983'),
    bio: 'He\'s really great.',
    profilePictureURL: 'assets/mock-data/cloud-img.jpg',
    followerCount: 777
  },
  {
    firstName: 'Geralt',
    lastName: 'of Rivia',
    email: 'wh1t3_w0lf@witchers.com',
    birthDate: new Date('10-16-1640'),
    bio: 'He\'s really great.',
    profilePictureURL: 'assets/mock-data/geralt-img.jpg',
    followerCount: 352
  },
  {
    firstName: 'Kvothe',
    lastName: 'son of Arliden',
    email: 'six_strings@arcanum.edu',
    birthDate: new Date('07-02-1202'),
    bio: 'He\'s really great.',
    profilePictureURL: 'assets/mock-data/kvothe-img.jpg',
    followerCount: 1
  }
];
