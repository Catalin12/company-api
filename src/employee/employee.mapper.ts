import { Injectable } from "@nestjs/common";
import { EmployeeDTO } from "./employee.dto";
import { Employee } from "./employee.entity";

@Injectable()
export class EmployeeMapper {

	public toDTO(enitity: Employee): EmployeeDTO {
		return {
			id: enitity.id,
			idDepartment: enitity.idDepartment,
			firstName: enitity.firstName,
			lastName: enitity.lastName,
			CNP: enitity.CNP,
			jobFunction: enitity.jobFunction,
			salary: enitity.salary,
			daysOff: enitity.daysOff
		}
	}

	public toDTOs(entities: Employee[]): EmployeeDTO[] {
		const employeeDTOs: EmployeeDTO[] = [];
		for (const entity of entities) {
			employeeDTOs.push(this.toDTO(entity));
		}
		return employeeDTOs;
	}

	public toEntity(dto: EmployeeDTO): Employee {
		return {
			id: dto.id,
			idDepartment: dto.idDepartment,
			firstName: dto.firstName,
			lastName: dto.lastName,
			CNP: dto.CNP,
			jobFunction: dto.jobFunction,
			salary: dto.salary,
			daysOff: dto.daysOff
		};
	}
}