package com.fatec.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Livro {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long idLivro;
    private String tituloLivro;
    private String subtituloLivro;
    private String autorLivro;
    private String anoLivro;
    private String generoLivro;
    private String editoraLivro;
    private String edicaoLivro;
    private String isbnLivro;
    private int paginasLivro;
    
    
    
	public Livro() {
	}

	public Livro(String tituloLivro, String subtituloLivro, String autorLivro, String anoLivro, String generoLivro,
			String editoraLivro, String edicaoLivro, String isbnLivro, int paginasLivroo) {
		super();
		this.tituloLivro = tituloLivro;
		this.subtituloLivro = subtituloLivro;
		this.autorLivro = autorLivro;
		this.anoLivro = anoLivro;
		this.generoLivro = generoLivro;
		this.editoraLivro = editoraLivro;
		this.edicaoLivro = edicaoLivro;
		this.isbnLivro = isbnLivro;
		this.paginasLivro = paginasLivroo;
	}
	
	public String getTituloLivro() {
		return tituloLivro;
	}
	public void setTituloLivro(String tituloLivro) {
		this.tituloLivro = tituloLivro;
	}
	public String getSubtituloLivro() {
		return subtituloLivro;
	}
	public void setSubtituloLivro(String subtituloLivro) {
		this.subtituloLivro = subtituloLivro;
	}
	public String getAutorLivro() {
		return autorLivro;
	}
	public void setAutorLivro(String autorLivro) {
		this.autorLivro = autorLivro;
	}
	public String getAnoLivro() {
		return anoLivro;
	}
	public void setAnoLivro(String anoLivro) {
		this.anoLivro = anoLivro;
	}
	public String getGeneroLivro() {
		return generoLivro;
	}
	public void setGeneroLivro(String generoLivro) {
		this.generoLivro = generoLivro;
	}
	public String getEditoraLivro() {
		return editoraLivro;
	}
	public void setEditoraLivro(String editoraLivro) {
		this.editoraLivro = editoraLivro;
	}
	public String getEdicaoLivro() {
		return edicaoLivro;
	}
	public void setEdicaoLivro(String edicaoLivro) {
		this.edicaoLivro = edicaoLivro;
	}
	public String getIsbnLivro() {
		return isbnLivro;
	}
	public void setIsbnLivro(String isbnLivro) {
		this.isbnLivro = isbnLivro;
	}
	public int getPaginasLivro() {
		return paginasLivro;
	}
	public void setPaginasLivro(int paginasLivro) {
		this.paginasLivro = paginasLivro;
	}
	public Long getIdLivro() {
		return idLivro;
	}
    
    
    
    
}


