package com.fatec.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Curso {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Long idCurso;
    private String siglaCurso;
    private String nomeCurso;
    private int periodoCurso;
    
    
	public Curso() {
	}
	
	public Curso(String siglaCurso, String nomeCurso, int periodoCurso) {
		super();
		this.siglaCurso = siglaCurso;
		this.nomeCurso = nomeCurso;
		this.periodoCurso = periodoCurso;
	}
	
	public String getSiglaCurso() {
		return siglaCurso;
	}
	public void setSiglaCurso(String siglaCurso) {
		this.siglaCurso = siglaCurso;
	}
	public String getNomeCurso() {
		return nomeCurso;
	}
	public void setNomeCurso(String nomeCurso) {
		this.nomeCurso = nomeCurso;
	}
	public int getPeriodoCurso() {
		return periodoCurso;
	}
	public void setPeriodoCurso(int periodoCurso) {
		this.periodoCurso = periodoCurso;
	}
	public Long getIdCurso() {
		return idCurso;
	}
    
    
    

}
