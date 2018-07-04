package com.fatec.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.entity.Devolucao;
import com.fatec.repository.DevolucaoRepository;

@RestController
@RequestMapping("/devolucao")
public class DevolucaoController {
	
	@Autowired
	DevolucaoRepository repository;
	
	@GetMapping("/findAll")
    public Iterable<Devolucao> devolucao() {
    	
        return repository.findAll();
    }
	
	@GetMapping("/findById/{id}")
	public Devolucao findByIdDevolucao(@PathVariable Long id) {
		Devolucao devolucao = repository.findByIdDevolucao(id);
	    return devolucao;
	}
	
	@PostMapping("/create")
    public Devolucao create(@RequestBody Devolucao devolucaoRequest) {
    	repository.save(devolucaoRequest);
        return devolucaoRequest;
    }

}