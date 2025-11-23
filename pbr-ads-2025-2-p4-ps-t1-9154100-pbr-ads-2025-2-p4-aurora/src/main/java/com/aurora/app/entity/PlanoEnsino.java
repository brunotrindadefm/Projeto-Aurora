package com.aurora.app.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "plano_ensino")
@Data
@NoArgsConstructor
public class PlanoEnsino {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String ementa;

    @Column(columnDefinition = "TEXT")
    private String objetivo;

    @Column(columnDefinition = "TEXT")
    private String conteudo;

    @Column(name = "referencia_basica_1")
    private String referenciaBasica1;

    @Column(name = "referencia_basica_2")
    private String referenciaBasica2;

    @Column(name = "referencia_basica_3")
    private String referenciaBasica3;

    @Column(name = "referencia_basica_4")
    private String referenciaBasica4;

    @Column(name = "referencia_basica_5")
    private String referenciaBasica5;

    @Column(name = "referencia_complementar_1")
    private String referenciaComplementar1;

    @Column(name = "referencia_complementar_2")
    private String referenciaComplementar2;

    @Column(name = "referencia_complementar_3")
    private String referenciaComplementar3;

    @Column(name = "referencia_complementar_4")
    private String referenciaComplementar4;

    @Column(name = "referencia_complementar_5")
    private String referenciaComplementar5;

    @Column(name = "referencia_complementar_6")
    private String referenciaComplementar6;

    @Column(name = "referencia_complementar_7")
    private String referenciaComplementar7;

    @Column(name = "referencia_complementar_8")
    private String referenciaComplementar8;

    @Column(name = "referencia_complementar_9")
    private String referenciaComplementar9;

    @Column(name = "referencia_complementar_10")
    private String referenciaComplementar10;

    @OneToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties("planoEnsino") 
    private Disciplina disciplina;
}