// =================== User and Login - starts ===================
export interface UserData {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
}

export interface UsersData {
  users: UserData[];
}

export interface UserStateData {
  isLoggedIn: boolean;
  userDetails: UserData | null;
}

export interface LoginPayload {
  email: string;
  password: string;
  callback: (response: { success: boolean }) => void;
}

export interface LogoutPayload {
  callback: (response: { success: boolean }) => void;
}

export interface LocalSessionPayload {
  callback: (response: {
    isLoggedIn: boolean;
    userDetails: UserData | null;
  }) => void;
}

// ===================  User and Login - ends  ===================

export interface ProductData {
  id: number;
  name: string;
  price: string;
  isactive: boolean;
  coverimage: string;
}

export interface ProductSateData {
  products: ProductData[];
}
