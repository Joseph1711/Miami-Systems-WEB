export type UserRole = 'ADMIN' | 'POLICE' | 'FIRE' | 'CITIZEN';

export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  role: UserRole;
}

export interface CaseRecord {
  id: string;
  discord_id: string;
  crime_type: string;
  description: string;
  fine_amount: number;
  jail_time_minutes: number;
  officer_name: string;
  status: string;
  created_at: string;
}

export interface Vehicle {
  id: string;
  plate: string;
  model: string;
  owner_id: string;
  status: string;
}
