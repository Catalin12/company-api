import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InsertResult, Repository } from "typeorm";

import { DepartmentDTO } from "./department.dto";
import { Department } from "./department.entity";
import { DepartmentMapper } from "./department.mapper";


@Injectable()
export class DepartmentService {
	public constructor(
		@InjectRepository(Department)
		private departmentRepo: Repository<Department>,
		private departmentMapper: DepartmentMapper
	) { }

	public async getAllDepartments(): Promise<DepartmentDTO[]> {
		const departments: Department[] = await this.departmentRepo.find();
		return this.departmentMapper.toDTOs(departments);
	}

	public async getDepartmentById(departmentId: number): Promise<DepartmentDTO> {
		const department: Department = await this.departmentRepo.findOne({ where: { id: departmentId } });
		return this.departmentMapper.toDTO(department);
	}

	public async addDepartment(departmentDTO: DepartmentDTO): Promise<InsertResult> {
		const department: Department = await this.departmentMapper.toEntity(departmentDTO);
		return this.departmentRepo.insert(department);
	}
}