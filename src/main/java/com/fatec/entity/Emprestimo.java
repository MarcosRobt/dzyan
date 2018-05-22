package com.fatec.entity;

import java.util.Date;

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
    private Date dataEmprestimo;
    private Date dataDevolucao;
    private String statusEmprestimo;
    
	public Emprestimo() {
	}
	
	public Emprestimo(Long idAluno, Long idLivro, Date dataEmprestimo, Date dataDevolucao, String statusEmprestimo) {
		super();
		this.idAluno = idAluno;
		this.idLivro = idLivro;
		this.dataEmprestimo = dataEmprestimo;
		this.dataDevolucao = dataDevolucao;
		this.statusEmprestimo = statusEmprestimo;
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
	public Date getDataEmprestimo() {
		return dataEmprestimo;
	}
	public void setDataEmprestimo(Date dataEmprestimo) {
		this.dataEmprestimo = dataEmprestimo;
	}
	public Date getDataDevolucao() {
		return dataDevolucao;
	}
	public void setDataDevolucao(Date dataDevolucao) {
		this.dataDevolucao = dataDevolucao;
	}
	public Long getIdEmprestimo() {
		return idEmprestimo;
	}
	public void setStatusEmprestimo(String statusEmprestimo) {
		this.statusEmprestimo = statusEmprestimo;
	}
	public String getStatusEmprestimo() {
		return statusEmprestimo;
	}
    
    
    
    
    

}