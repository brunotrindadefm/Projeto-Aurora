package com.aurora.app.dto;

import com.aurora.app.enums.TipoAcesso;

import lombok.Data;

@Data
public class CadastroRequest {
    private String matricula;
    private String nome;
    private String email;
    private String senha;
    private String confirmarSenha;
    private TipoAcesso tipoAcesso;
}
