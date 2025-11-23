package com.aurora.app.dto;

import com.aurora.app.enums.TipoAcesso;

import lombok.Data;

@Data
public class LoginRequest {
    private String matricula;
    private String senha;
    private TipoAcesso tipoAcesso;
}
