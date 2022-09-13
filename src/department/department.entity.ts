import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public name: string;

	@Column()
	public description: string;
}