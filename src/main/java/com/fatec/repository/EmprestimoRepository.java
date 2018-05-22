package com.fatec.repository;

import java.util.Date;

import org.springframework.data.repository.CrudRepository;

import com.fatec.entity.Emprestimo;

public interface EmprestimoRepository extends CrudRepository<Emprestimo, Long> {
	
	Emprestimo findByIdEmprestimo(Long id);
	
	Iterable<Emprestimo> findByIdAluno(Long id);
	
	Iterable<Emprestimo> findByIdLivro(Long id);
	
	Iterable<Emprestimo> findByStatusEmprestimo(String status);
	
	Long countByDataDevolucaoBeforeAndStatusEmprestimo(Date data, String status);

}