package com.fatec.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.entity.Curso;
import com.fatec.repository.CursoRepository;

@RestController
@RequestMapping("/curso")
public class CursoController {
	
	@Autowired
	CursoRepository repository;
	
	@GetMapping("/findAll")
    public Iterable<Curso> curso() {
    	
        return repository.findAll();
    }
	
	@GetMapping("/findById/{id}")
    public Curso findById(@PathVariable Long id) {
		Curso curso = repository.findByIdCurso(id);
        return curso;
    }
	
	@GetMapping("/findBySigla/{id}")
    public Curso findBySigla(@PathVariable String id) {
		Curso curso = repository.findBySiglaCurso(id);
        return curso;
    }
    
    @PostMapping("/create")
    public Curso create(@RequestBody Curso cursoRequest) {
    	repository.save(cursoRequest);
        return cursoRequest;
    }
    
    @DeleteMapping("/deleteDyId/{id}")
    public Curso deleteDyId(@PathVariable Long id) {
    	Curso curso = repository.findByIdCurso(id);
    	repository.delete(curso);
        return curso;
    }
    
    @DeleteMapping("/deleteBySigla/{id}")
    public Curso deleteBySigla(@PathVariable String id) {
    	Curso curso = repository.findBySiglaCurso(id);
    	repository.delete(curso);
        return curso;
    }
    
    @PostMapping("/updateById")
    public Curso updateById(@RequestBody Curso cursoRequest) {
    	Curso curso = repository.findOne(cursoRequest.getIdCurso());
    	
    	curso.setNomeCurso(cursoRequest.getNomeCurso());
    	curso.setSiglaCurso(cursoRequest.getSiglaCurso());
    	curso.setPeriodoCurso(cursoRequest.getPeriodoCurso());
    	
    	repository.save(curso);
        return curso;
    }

}
