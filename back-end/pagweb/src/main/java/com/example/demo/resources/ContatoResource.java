package com.example.demo.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Contato;
import com.example.demo.services.ContatoService;

@RestController
@RequestMapping(name = "/contato/")
@CrossOrigin("http://localhost:3000/")
public class ContatoResource {
	
	@Autowired
	private ContatoService service;
	
	@GetMapping("/contato")
	public List<Contato> findAll() {
		return service.findAll();
	}
	
	
	@PostMapping("/contato")
	public ResponseEntity<Contato> save(@RequestBody Contato contato) {
		service.save(contato);
		return ResponseEntity.ok().body(contato);
	}
}
