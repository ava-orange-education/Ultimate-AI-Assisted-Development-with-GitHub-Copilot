// Prompt Used: Define the User entity model in TypeORM for the PostgreSQL database connection, with ID, name, and email fields

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
