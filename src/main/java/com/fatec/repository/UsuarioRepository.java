package com.fatec.repository;

import org.springframework.data.repository.CrudRepository;

import com.fatec.entity.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
	
	Usuario findByIdUsuario(Long id);

}
