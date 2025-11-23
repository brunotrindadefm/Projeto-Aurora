package com.aurora.app.entity;

import com.aurora.app.enums.NomeRegimeTrabalho;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "regime_trabalho")
@Data
@NoArgsConstructor
public class RegimeTrabalho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private NomeRegimeTrabalho nome;
}