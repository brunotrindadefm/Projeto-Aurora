package com.aurora.app.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "universidade")
@Data
@NoArgsConstructor
public class Universidade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 20)
    private String cnpj;

    @Column(nullable = false, length = 200)
    private String nome;

    @Column(length = 10)
    private String sigla;

    @Column(length = 200)
    private String endereco;

    @Column(length = 20)
    private String telefone;

    @Column(length = 200)
    private String url;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] logo;
}