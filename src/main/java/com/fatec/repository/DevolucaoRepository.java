package com.fatec.repository;

import org.springframework.data.repository.CrudRepository;

import com.fatec.entity.Devolucao;
import com.fatec.entity.Emprestimo;

public interface DevolucaoRepository extends CrudRepository<Devolucao, Long> {
	
	Devolucao findByIdDevolucao(Long id);
	
}
