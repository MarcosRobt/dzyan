package com.fatec.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Emprestimo {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Long idEmprestimo;
    private Long idAluno;
    private Long idLivro;
    private String dataEmprestimo;
    private String dataDevolucao;
    
    
	public Emprestimo() {
	}
	
	public Emprestimo(Long idAluno, Long idLivro, String dataEmprestimo, String dataDevolucao) {
		super();
		this.idAluno = idAluno;
		this.idLivro = idLivro;
		this.dataEmprestimo = dataEmprestimo;
		this.dataDevolucao = dataDevolucao;
	}
	public Long getIdAluno() {
		return idAluno;
	}
	public void setIdAluno(Long idAluno) {
		this.idAluno = idAluno;
	}
	public Long getIdLivro() {
		return idLivro;
	}
	public void setIdLivro(Long idLivro) {
		this.idLivro = idLivro;
	}
	public String getDataEmprestimo() {
		return dataEmprestimo;
	}
	public void setDataEmprestimo(String dataEmprestimo) {
		this.dataEmprestimo = dataEmprestimo;
	}
	public String getDataDevolucao() {
		return dataDevolucao;
	}
	public void setDataDevolucao(String dataDevolucao) {
		this.dataDevolucao = dataDevolucao;
	}
	public Long getIdEmprestimo() {
		return idEmprestimo;
	}
    
    
    
    
    

}

