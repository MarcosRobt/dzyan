package com.fatec.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.entity.Livro;
import com.fatec.repository.LivroRepository;

@RestController
@RequestMapping("/livro")
public class LivroController {
	
	@Autowired
	LivroRepository repository;
    
	@GetMapping("/findAll")
    public Iterable<Livro> livro() {
    	
        return repository.findAll();
    }
	
	@GetMapping("/findById/{id}")
    public Livro findById(@PathVariable Long id) {
		Livro livro = repository.findByIdLivro(id);
        return livro;
    }
	
	@GetMapping("/findByIsbn/{id}")
    public Livro findByIsbn(@PathVariable String id) {
		Livro livro = repository.findByIsbnLivro(id);
        return livro;
    }
    
    @PostMapping("/create")
    public Livro create(@RequestBody Livro livroRequest) {
    	repository.save(livroRequest);
        return livroRequest;
    }
    
    @DeleteMapping("/deleteById/{id}")
    public Livro deleteById(@PathVariable Long id) {
    	Livro livro = repository.findByIdLivro(id);
    	repository.delete(livro);
        return livro;
    }
    
    @DeleteMapping("/deleteDyIsbn/{id}")
    public Livro deleteDyIsbn(@PathVariable String id) {
    	Livro livro = repository.findByIsbnLivro(id);
    	repository.delete(livro);
        return livro;
    }
    
    @PostMapping("/updateById")
    public Livro updateById(@RequestBody Livro livroRequest) {
    	Livro livro = repository.findByIdLivro(livroRequest.getIdLivro());
    	repository.save(livro);
        return livro;
    }
    
    @PostMapping("/updateByIsbn")
    public Livro updateByIsbn(@RequestBody Livro livroRequest) {
    	Livro livro = repository.findByIsbnLivro(livroRequest.getIsbnLivro());
    	
    	livro.setTituloLivro(livroRequest.getTituloLivro());
    	livro.setSubtituloLivro(livroRequest.getSubtituloLivro());
    	livro.setAutorLivro(livroRequest.getAutorLivro());
    	livro.setAnoLivro(livroRequest.getAnoLivro());
    	livro.setGeneroLivro(livroRequest.getGeneroLivro());
    	livro.setEdicaoLivro(livroRequest.getEdicaoLivro());
    	livro.setEditoraLivro(livroRequest.getEditoraLivro());
    	livro.setIsbnLivro(livroRequest.getIsbnLivro());
    	livro.setPaginasLivro(livroRequest.getPaginasLivro());
    	
    	repository.save(livro);
        return livro;
    }

}
