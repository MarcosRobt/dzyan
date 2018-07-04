package com.fatec.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Devolucao {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Long idDevolucao;
    private Long idEmprestimo;
    private Date dataDevolucao;
    
    
    
	public Devolucao() {
	}
	
	public Devolucao(Long idEmprestimo, Date dataDevolucao) {
		super();
		this.idEmprestimo = idEmprestimo;
		this.dataDevolucao = dataDevolucao;
	}
	public Long getIdEmprestimo() {
		return idEmprestimo;
	}
	public void setIdEmprestimo(Long idEmprestimo) {
		this.idEmprestimo = idEmprestimo;
	}
	public Date getDataDevolucao() {
		return dataDevolucao;
	}
	public void setDataDevolucao(Date dataDevolucao) {
		this.dataDevolucao = dataDevolucao;
	}
	public Long getIdDevolucao() {
		return idDevolucao;
	}
    
    

}

