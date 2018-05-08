package com.fatec.repository;

import org.springframework.data.repository.CrudRepository;

import com.fatec.entity.Aluno;

public interface AlunoRepository extends CrudRepository<Aluno, Long> {
	
	Aluno findByIdAluno(Long id);
	
	Aluno findByRaAluno(String id);

}
