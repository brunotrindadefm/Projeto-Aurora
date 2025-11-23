package com.aurora.app.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "curso")
@Data
@NoArgsConstructor
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String nome;

    @Column(length = 10)
    private String sigla;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @Column(name = "coordenador", length = 200)
    private String coordenador;

    @Column(name = "telefone", length = 20)
    private String telefoneContato;

    @Column(name = "url", length = 200)
    private String urlSite;

    @ManyToOne
    @JoinColumn(name = "departamento_id")
    @JsonIgnoreProperties("cursos")
    private Departamento departamento;

    @OneToMany(mappedBy = "curso", fetch = FetchType.LAZY)
    private List<Disciplina> disciplinas;
}