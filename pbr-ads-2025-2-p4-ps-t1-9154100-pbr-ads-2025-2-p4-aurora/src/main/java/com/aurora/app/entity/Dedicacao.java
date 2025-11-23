package com.aurora.app.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "dedicacao")
@Data
@NoArgsConstructor
public class Dedicacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "alocacao_id", nullable = false)
    private Alocacao alocacao;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "oferta_id", nullable = false)
    private Oferta oferta;
}