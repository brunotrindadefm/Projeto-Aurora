package com.aurora.app.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "oferta")
@Data
@NoArgsConstructor
public class Oferta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER) 
    @JoinColumn(name = "unidade_id", nullable = false)
    private Unidade unidade;

    @ManyToOne(fetch = FetchType.EAGER) 
    @JoinColumn(name = "disciplina_id", nullable = false)
    private Disciplina disciplina;
    
    @ManyToOne(fetch = FetchType.EAGER) 
    @JoinColumn(name = "professor_id")
    private Professor professor;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "turno_id", nullable = false)
    private Turno turno;

    @OneToMany(mappedBy = "oferta", fetch = FetchType.LAZY)
    private List<Turma> turmas;

    @OneToMany(mappedBy = "oferta", fetch = FetchType.LAZY)
    private List<Dedicacao> dedicacoes;
}