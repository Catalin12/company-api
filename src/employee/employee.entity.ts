import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public idDepartment: number;

	@Column()
	public firstName: string;

	@Column()
	public lastName: string;

	@Column()
	public CNP: string;

	@Column()
	public jobFunction: string;

	@Column()
	public salary: number;

	@Column()
	public daysOff: number;
}