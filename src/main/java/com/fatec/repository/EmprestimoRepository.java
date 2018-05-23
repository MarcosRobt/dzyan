package com.fatec.repository;

import java.util.Date;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fatec.entity.Emprestimo;

public interface EmprestimoRepository extends CrudRepository<Emprestimo, Long> {
	
	Emprestimo findByIdEmprestimo(Long id);
	
	Iterable<Emprestimo> findByIdAluno(Long id);
	
	Iterable<Emprestimo> findByIdLivro(Long id);
	
	Long countByStatusEmprestimo(String status);
	
	Long countByDataDevolucaoLessThanAndStatusEmprestimo(Date data, String status);
	
	Long countByDataDevolucaoGreaterThanEqualAndStatusEmprestimo(Date data, String status);
	
	@Query("SELECT count(*) FROM Emprestimo WHERE MONTH(data_Devolucao) = ?1")
	Long countByMonth(Integer mes);
	
}