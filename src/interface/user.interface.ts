export interface user {
    postData?:any;
    
} 

export interface Users {
    id: string;
    username: string;
    password: string;
    email: string;
    phone?: string;
    age?: string;
    role?:string;
    status?: string;
    active: boolean;
  }
  
  export enum status {
    PENDING = 'pending',
    UCONFIRMED = 'not-confirmed',
    BANNED = 'Banned',
    VERIFY = 'verify',
  }

  export enum role {
    ADMIN = 'admin',
    USER = 'user',
  }