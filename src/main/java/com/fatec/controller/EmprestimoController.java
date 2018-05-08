package com.fatec.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.entity.Emprestimo;
import com.fatec.entity.Livro;
import com.fatec.repository.EmprestimoRepository;

@RestController
@RequestMapping("/emprestimo")
public class EmprestimoController {
	
	@Autowired
	EmprestimoRepository repository;
	
	@GetMapping("/findAll")
    public Iterable<Emprestimo> emprestimo() {
    	
        return repository.findAll();
    }
	
	@GetMapping("/findById/{id}")
	public Emprestimo findByIdEmprestimo(@PathVariable Long id) {
		Emprestimo emprestimo = repository.findByIdEmprestimo(id);
	    return emprestimo;
	}
	
	@GetMapping("/findByIdAluno/{id}")
	public Emprestimo findByIdAluno(@PathVariable Long id) {
		Emprestimo emprestimo = repository.findByIdAluno(id);
	    return emprestimo;
	}
	
	@GetMapping("/findByIdLivro/{id}")
	public Emprestimo findByIdLivro(@PathVariable Long id) {
		Emprestimo emprestimo = repository.findByIdLivro(id);
	    return emprestimo;
	}
	
	@PostMapping("/create")
    public Emprestimo create(@RequestBody Emprestimo emprestimoRequest) {
    	repository.save(emprestimoRequest);
        return emprestimoRequest;
    }

}
