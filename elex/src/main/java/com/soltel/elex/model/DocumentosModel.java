package com.soltel.elex.model;

import java.time.LocalDate;
import jakarta.persistence.*;

@Entity
@Table(name = "documentos")
public class DocumentosModel {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	private String nombre;

    private String descripcion;

    private LocalDate fecha;

	private String archivo;

    @ManyToOne
    @JoinColumn(name = "tipo")
    private ActuacionesModel tipo;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public LocalDate getFecha() {
		return fecha;
	}

	public void setFecha(LocalDate fecha) {
		this.fecha = fecha;
	}

	public String getArchivo() {
		return archivo;
	}
	
	public void setArchivo(String archivo) {
		this.archivo = archivo;
	}

	public ActuacionesModel getTipo() {
		return tipo;
	}

	public void setTipo(ActuacionesModel tipo) {
		this.tipo = tipo;
	}

	
    
}
