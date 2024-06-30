import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  users = [
    {
      id: 1,
      name: 'user1',
      age: 25
    },
    {
      id: 2,
      name: 'user2',
      age: 35
    },
    {
      id: 3,
      name: 'user3',
      age: 55
    },
  
    ]
    
    getUsers() {
      return this.users;
    }
  }
