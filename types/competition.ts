export interface Competition {
  id: string; 
  title: string;
  description?: string;
  start_date: string; 
  end_date: string; 
  max_participants?: number; 
  created_by: string; 
}