package com.fatec.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Aluno {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Long idAluno;
    private String nomeAluno;
    private int idCurso;
    private String emailAluno;
    private String dtAluno;
    private String cpfAluno;
    private String rgAluno;
    private String raAluno;
    private String sexoAluno;
    private String foneAluno;
    
    
	public Aluno() {
	}


	public Aluno(String nomeAluno, int idCurso, String emailAluno,
			String dtAluno, String cpfAluno, String rgAluno, String raAluno, String sexoAluno, String foneAluno) {
		super();
		this.nomeAluno = nomeAluno;
		this.idCurso = idCurso;
		this.emailAluno = emailAluno;
		this.dtAluno = dtAluno;
		this.cpfAluno = cpfAluno;
		this.rgAluno = rgAluno;
		this.raAluno = raAluno;
		this.sexoAluno = sexoAluno;
		this.foneAluno = foneAluno;
	}
	
	
	public String getNomeAluno() {
		return nomeAluno;
	}
	public void setNomeAluno(String nomeAluno) {
		this.nomeAluno = nomeAluno;
	}
	public int getIdCurso() {
		return idCurso;
	}
	public void setIdCurso(int idCurso) {
		this.idCurso = idCurso;
	}
	public String getEmailAluno() {
		return emailAluno;
	}
	public void setEmailAluno(String emailAluno) {
		this.emailAluno = emailAluno;
	}
	public String getDtAluno() {
		return dtAluno;
	}
	public void setDtAluno(String dtAluno) {
		this.dtAluno = dtAluno;
	}
	public String getCpfAluno() {
		return cpfAluno;
	}
	public void setCpfAluno(String cpfAluno) {
		this.cpfAluno = cpfAluno;
	}
	public String getRgAluno() {
		return rgAluno;
	}
	public void setRgAluno(String rgAluno) {
		this.rgAluno = rgAluno;
	}
	public String getRaAluno() {
		return raAluno;
	}
	public void setRaAluno(String raAluno) {
		this.raAluno = raAluno;
	}
	public String getSexoAluno() {
		return sexoAluno;
	}
	public void setSexoAluno(String sexoAluno) {
		this.sexoAluno = sexoAluno;
	}
	public String getFoneAluno() {
		return foneAluno;
	}
	public void setFoneAluno(String foneAluno) {
		this.foneAluno = foneAluno;
	}
	public Long getIdAluno() {
		return idAluno;
	}
    
    

}


