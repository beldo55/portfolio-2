

export interface Profile {
  name: string;
  role: string;
  description: string;
  image: string;
  email: string;
  phone: string;
  location: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}