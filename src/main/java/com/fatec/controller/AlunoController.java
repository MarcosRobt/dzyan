package com.fatec.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.entity.Aluno;
import com.fatec.entity.Curso;
import com.fatec.repository.AlunoRepository;
import com.fatec.repository.CursoRepository;
import com.fatec.repository.AlunoRepository;

@RestController
@RequestMapping("/aluno")
public class AlunoController {
	
	
	@Autowired
	AlunoRepository repository;
	
	@Autowired
	CursoRepository cursoRepository;
	
	@GetMapping("/findAll")
    public Iterable<Aluno> aluno() {
    	
        return repository.findAll();
    }
	
	@GetMapping("/findById/{id}")
    public Aluno findById(@PathVariable Long id) {
		Aluno aluno = repository.findByIdAluno(id);
        return aluno;
    }
	
	@GetMapping("/findByRa/{id}")
    public Aluno findByRa(@PathVariable String id) {
		Aluno aluno = repository.findByRaAluno(id);
        return aluno;
    }
    
    @PostMapping("/create")
    public Aluno create(@RequestBody Aluno alunoRequest) { 
    	repository.save(alunoRequest);
        return alunoRequest;
    }
    
    @DeleteMapping("/deleteById/{id}")
    public Aluno deleteById(@PathVariable Long id) {
    	Aluno aluno = repository.findByIdAluno(id);
    	repository.delete(aluno);
        return aluno;
    }
    
    @DeleteMapping("/deleteByRa/{id}")
    public Aluno deleteByRa(@PathVariable String id) {
    	Aluno aluno = repository.findByRaAluno(id);
    	repository.delete(aluno);
        return aluno;
    }
    
    @PostMapping("/updateById")
    public Aluno updateById(@RequestBody Aluno alunoRequest) {
    	Aluno aluno = repository.findOne(alunoRequest.getIdAluno());
    	
    	aluno.setNomeAluno(alunoRequest.getNomeAluno());
    	aluno.setIdCurso(alunoRequest.getIdCurso());
    	aluno.setEmailAluno(alunoRequest.getEmailAluno());
    	aluno.setDtAluno(alunoRequest.getDtAluno());
    	aluno.setCpfAluno(alunoRequest.getCpfAluno());
    	aluno.setRgAluno(alunoRequest.getRgAluno());
    	aluno.setRaAluno(alunoRequest.getRaAluno());
    	aluno.setSexoAluno(alunoRequest.getSexoAluno());
    	aluno.setFoneAluno(alunoRequest.getFoneAluno());
    	
    	repository.save(aluno);
        return aluno;
    }
	
	

}
