package com.aurora.app.entity;

import com.aurora.app.enums.SexoEnum;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "professor")
@Data
@NoArgsConstructor
public class Professor {

    @Id
    private Long matricula;

    @Column(nullable = false, unique = true, length = 14)
    private String cpf;

    @Column(length = 20)
    private String identidade;

    @Column(nullable = false, length = 200)
    private String nome;

    @Column(name = "data_nascimento")
    private LocalDate dataNascimento;

    @Column(length = 100)
    private String nacionalidade;

    @Column(length = 100)
    private String naturalidade;

    @Enumerated(EnumType.STRING)
    @Column(length = 1, nullable = true)
    private SexoEnum sexo;

    @Column(length = 50)
    private String reservista;

    @Column(length = 200)
    private String endereco;

    @Column(length = 20)
    private String telefone;

    @Column(length = 200)
    private String email;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "titulacao_id")
    private Titulacao titulacao;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "regime_id")
    private RegimeTrabalho regime;

    @OneToOne(mappedBy = "chefe")
    @JsonIgnoreProperties("chefe")
    private Departamento departamentoChefiado;

    @JsonIgnore
    @OneToMany(mappedBy = "professor", fetch = FetchType.LAZY)
    private List<Alocacao> alocacoes;

    @JsonIgnore
    @OneToMany(mappedBy = "professor", fetch = FetchType.LAZY)
    private List<Oferta> ofertas;
}