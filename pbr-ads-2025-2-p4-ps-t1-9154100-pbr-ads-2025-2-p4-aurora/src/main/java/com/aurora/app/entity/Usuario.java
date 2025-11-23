package com.aurora.app.entity;

import com.aurora.app.enums.TipoAcesso;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "usuarios")
@Data                  
@NoArgsConstructor     
@AllArgsConstructor     
@Builder               
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private TipoAcesso tipoAcesso;

    private String matricula;

    private String nome;

    private String email;

    private String senha;
}

