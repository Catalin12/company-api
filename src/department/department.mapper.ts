import { Injectable } from "@nestjs/common";
import { DepartmentDTO } from "./department.dto";
import { Department } from "./department.entity";

@Injectable()
export class DepartmentMapper {

	public toDTO(enitity: Department): DepartmentDTO {
		return {
			id: enitity.id,
			name: enitity.name,
			description: enitity.description
		}
	}

	public toDTOs(entities: Department[]): DepartmentDTO[] {
		const departmentDTOs: DepartmentDTO[] = [];
		for (const entity of entities) {
			departmentDTOs.push(this.toDTO(entity));
		}
		return departmentDTOs;
	}

	public toEntity(dto: DepartmentDTO): Department {
		return {
			id: dto.id,
			name: dto.name,
			description: dto.description
		};
	}
}