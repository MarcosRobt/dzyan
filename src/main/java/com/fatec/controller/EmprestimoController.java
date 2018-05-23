package com.fatec.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.entity.Emprestimo;
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
	
	@GetMapping("/findActives")
    public Long findActives() {
		
        return repository.countByStatusEmprestimo(new String("1"));
    }
	
	@GetMapping("/countByDataDevolucaoBefore/{date}")
    public Long countByDataDevolucaoBefore(@PathVariable String date) throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date dataValida = sdf.parse(date);
		
		Long result = repository.countByDataDevolucaoLessThanAndStatusEmprestimo(dataValida,new String("1"));
        return result;
    }
	
	@GetMapping("/countByDataDevolucaoAfter/{date}")
    public Long countByDataDevolucaoAfter(@PathVariable String date) throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date dataValida = sdf.parse(date);
		
		Long result = repository.countByDataDevolucaoGreaterThanEqualAndStatusEmprestimo(dataValida,new String("1"));
        return result;
    }
	
	@GetMapping("/findById/{id}")
	public Emprestimo findByIdEmprestimo(@PathVariable Long id) {
		Emprestimo emprestimo = repository.findByIdEmprestimo(id);
	    return emprestimo;
	}
	
	@GetMapping("/findByIdAluno/{id}")
	public Iterable<Emprestimo> findByIdAluno(@PathVariable Long id) {
		
	    return repository.findByIdAluno(id);
	}
	
	@GetMapping("/findByIdLivro/{id}")
	public Iterable<Emprestimo> findByIdLivro(@PathVariable Long id) {
		
	    return repository.findByIdLivro(id);
	}
	
	@PostMapping("/create")
    public Emprestimo create(@RequestBody Emprestimo emprestimoRequest) {
    	repository.save(emprestimoRequest);
        return emprestimoRequest;
    }

}