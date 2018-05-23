package com.fatec.repository;

import java.util.Date;

import org.springframework.data.repository.CrudRepository;

import com.fatec.entity.Emprestimo;

public interface EmprestimoRepository extends CrudRepository<Emprestimo, Long> {
	
	Emprestimo findByIdEmprestimo(Long id);
	
	Iterable<Emprestimo> findByIdAluno(Long id);
	
	Iterable<Emprestimo> findByIdLivro(Long id);
	
	Long countByStatusEmprestimo(String status);
	
	Long countByDataDevolucaoLessThanAndStatusEmprestimo(Date data, String status);
	
	Long countByDataDevolucaoGreaterThanEqualAndStatusEmprestimo(Date data, String status);
	
}