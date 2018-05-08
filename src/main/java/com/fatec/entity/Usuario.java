package com.fatec.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Usuario {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Long idUsuario;
    private String cpfUsuario;
    private String nomeUsuario;
    private String senhaUsuario;
    
    
	public Usuario() {
		super();
	}
	
	public Usuario(String cpfUsuario, String nomeUsuario, String senhaUsuario) {
		super();
		this.cpfUsuario = cpfUsuario;
		this.nomeUsuario = nomeUsuario;
		this.senhaUsuario = senhaUsuario;
	}


	
	public String getSenhaUsuario() {
		return senhaUsuario;
	}
	public void setSenhaUsuario(String senhaUsuario) {
		this.senhaUsuario = senhaUsuario;
	}
	public String getCpfUsuario() {
		return cpfUsuario;
	}
	public void setCpfUsuario(String cpfUsuario) {
		this.cpfUsuario = cpfUsuario;
	}
	public String getNomeUsuario() {
		return nomeUsuario;
	}
	public void setNomeUsuario(String nomeUsuario) {
		this.nomeUsuario = nomeUsuario;
	}
	public Long getIdUsuario() {
		return idUsuario;
	}
    
    
    
    
    
    
    
}
