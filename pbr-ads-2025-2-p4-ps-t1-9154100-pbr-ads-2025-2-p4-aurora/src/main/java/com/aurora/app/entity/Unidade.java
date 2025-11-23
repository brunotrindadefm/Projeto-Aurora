package com.aurora.app.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "unidade")
@Data
@NoArgsConstructor
public class Unidade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String nome;

    @Column(nullable = false, length = 3)
    private String sigla;

    @Column(length = 200)
    private String endereco;

    @Column(length = 20)
    private String telefone;

    @Column(length = 200)
    private String url;

    private Boolean principal;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "universidade_id", nullable = false)
    private Universidade universidade;
}