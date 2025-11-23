package com.aurora.app.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "turma")
@Data
@NoArgsConstructor
public class Turma {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tipo_id")
    private TipoTurma tipo;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "oferta_id", nullable = false)
    private Oferta oferta;
}