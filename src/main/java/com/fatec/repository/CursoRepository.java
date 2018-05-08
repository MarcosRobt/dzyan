package com.fatec.repository;

import org.springframework.data.repository.CrudRepository;

import com.fatec.entity.Curso;

public interface CursoRepository extends CrudRepository<Curso, Long> {
	
	Curso findByIdCurso(Long id);
	
	Curso findBySiglaCurso(String id);
}
