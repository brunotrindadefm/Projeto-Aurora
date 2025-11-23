package com.aurora.app.entity;

import com.aurora.app.enums.SexoEnum;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "aluno")
@Data
@NoArgsConstructor
public class Aluno {

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
    @Column(length = 1)
    private SexoEnum sexo;

    @Column(length = 50)
    private String reservista;

    @Column(length = 200)
    private String endereco;

    @Column(length = 20)
    private String telefone;

    @Column(length = 200)
    private String email;

    @OneToMany(mappedBy = "aluno", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Historico> historicos;
}