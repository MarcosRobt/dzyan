package com.fatec.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AccessController {

	@GetMapping("index")
	public String listar() {
		return "pages/index";
	}
	
	@GetMapping("login")
	public String login() {
		return "pages/login";
	}
	
	@GetMapping("register")
	public String register() {
		return "pages/register";
	}
	
	@GetMapping("forgot-password")
	public String resetPwd() {
		return "pages/forgot-password";
	}
	
	@GetMapping("blank")
	public String crud() {
		return "pages/blank";
	}
	
	@GetMapping("listAluno")
	public String listAluno() {
		return "pages/listAluno";
	}
	
	@GetMapping("cadAluno")
	public String cadAluno() {
		return "pages/cadAluno";
	}
	
	@GetMapping("listLivro")
	public String listLivro() {
		return "pages/listLivro";
	}
	
	@GetMapping("cadLivro")
	public String cadLivro() {
		return "pages/cadLivro";
	}
	
	@GetMapping("listCurso")
	public String listCurso() {
		return "pages/listCurso";
	}
	
	@GetMapping("cadCurso")
	public String cadCurso() {
		return "pages/cadCurso";
	}
	
}
