package com.fatec.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.entity.Usuario;
import com.fatec.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	UsuarioRepository repository;
	
	@GetMapping("/findById/{id}")
    public Usuario findById(@PathVariable Long id) {
		Usuario usuario = repository.findByIdUsuario(id);
        return usuario;
    }
	
}
