export interface user {
    postData?:any;
    
} 

export interface Users  {
    id: string;
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
    fullname?: string;
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
  type SortOrder = -1 | 1;
  export interface SortParams {
    [key: string]: SortOrder;
  }