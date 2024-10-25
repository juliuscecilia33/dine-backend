export interface User {
  id: string;
  username: string;
  password: string;
  photo_url?: string;
  email: string;
  phone_number: string;
  is_child: boolean;
  emergency_contact_name?: string;
  emergency_contact_email?: string;
  created_at: Date;
  updated_at: Date;
}
