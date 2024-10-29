export interface StandardCard {
  id: string;
  user_id: string;
  description?: string;
  notes?: JSON;
  shared_with?: JSON;
  created_at: Date;
  updated_at: Date;
}
