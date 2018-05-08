package com.fatec.repository;

import org.springframework.data.repository.CrudRepository;

import com.fatec.entity.Livro;

public interface LivroRepository extends CrudRepository<Livro, Long> {

	Livro findByIdLivro(Long id);
	
	Livro findByIsbnLivro(String id);

}
 