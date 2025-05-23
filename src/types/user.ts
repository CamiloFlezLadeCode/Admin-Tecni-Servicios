export interface User {
  id: string;
  name?: string;
  avatar?: string;
  email?: string;
  documento?: string;

  [key: string]: unknown;
}
