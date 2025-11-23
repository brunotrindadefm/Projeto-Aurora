package com.aurora.app.entity;

import com.aurora.app.enums.NomeTitulacao;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "titulacao")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Titulacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private NomeTitulacao nome;
}