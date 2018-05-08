package com.fatec.repository;

import org.springframework.data.repository.CrudRepository;

import com.fatec.entity.Emprestimo;

public interface EmprestimoRepository extends CrudRepository<Emprestimo, Long> {
	
	Emprestimo findByIdEmprestimo(Long id);
	
	Emprestimo findByIdAluno(Long id);
	
	Emprestimo findByIdLivro(Long id);

}
