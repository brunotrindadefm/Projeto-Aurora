package com.aurora.app.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "departamentos")
@Data
@NoArgsConstructor
public class Departamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String nome;

    @Column(length = 10)
    private String sigla;

    @Column(name = "telefone", length = 20)
    private String telefoneContato;

    @Column(name = "url", length = 200)
    private String urlSite;

    @OneToOne
    @JoinColumn(name = "chefe_id")
    @JsonIgnoreProperties({ "departamento", "departamentoChefiado", "chefia" })
    private Professor chefe;

    @OneToMany(mappedBy = "departamento")
    @JsonIgnore
    private List<Curso> cursos;
}