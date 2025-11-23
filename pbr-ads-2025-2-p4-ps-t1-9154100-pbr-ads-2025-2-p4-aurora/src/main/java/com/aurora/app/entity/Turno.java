package com.aurora.app.entity;

import com.aurora.app.enums.NomeTurno;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalTime;
import java.util.List;

@Entity
@Table(name = "turno")
@Data
@NoArgsConstructor
public class Turno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "hora_inicio", nullable = false)
    private LocalTime horaInicio;

    @Column(name = "hora_termino", nullable = false)
    private LocalTime horaTermino;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private NomeTurno nome;

    @OneToMany(mappedBy = "turno", fetch = FetchType.LAZY)
    private List<Oferta> ofertas;
}