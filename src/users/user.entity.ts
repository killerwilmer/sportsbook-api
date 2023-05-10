import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column({ nullable: false })
  public role: string;
  @Column({ nullable: false })
  public first_name: string;
  @Column()
  public last_name: string;
  @Column()
  public phone: string;
  @Column()
  public email: string;
  @Column()
  public username: string;
  @Column()
  public address: string;
  @Column()
  public gender: string;
  @Column()
  public birth_date: Date;
  @Column()
  public country_id: number;
  @Column()
  public city: string;
  @Column()
  public category: string;
  @Column()
  public document_id: string;
  @Column()
  public user_state: string;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  public created_at: Date;
  @Column({ type: 'datetime' })
  public updated_at: Date;
  @Column({ type: 'datetime' })
  public deleted_at: Date;
}
