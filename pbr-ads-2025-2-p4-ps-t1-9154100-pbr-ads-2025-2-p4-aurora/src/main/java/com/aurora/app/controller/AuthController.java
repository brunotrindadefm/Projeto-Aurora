package com.aurora.app.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.aurora.app.dto.CadastroRequest;
import com.aurora.app.dto.LoginRequest;
import com.aurora.app.entity.Usuario;
import com.aurora.app.service.AuthService;

@Controller
public class AuthController {

    @Autowired
    private AuthService authService;

    @GetMapping("/api/auth/login")
    public String loginPage() {
        return "login";
    }

    @PostMapping("/api/auth/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        try {
            Usuario usuario = authService.login(req.getMatricula(), req.getSenha());

            if (!usuario.getTipoAcesso().equals(req.getTipoAcesso())) {
                return ResponseEntity.badRequest().body(Map.of("mensagem", "Tipo de acesso incorreto."));
            }

            return ResponseEntity.ok(Map.of(
                    "mensagem", "Login realizado!",
                    "tipoAcesso", usuario.getTipoAcesso(),
                    "nome", usuario.getNome()));

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("mensagem", e.getMessage()));
        }
    }

    @GetMapping("/api/auth/cadastro")
    public String cadastroPage(Model model) {
        model.addAttribute("usuarioDTO", new Usuario());
        return "cadastro";
    }

    @PostMapping("/api/auth/cadastro")
    public ResponseEntity<?> cadastrar(@RequestBody CadastroRequest req) {
        try {
            Usuario usuario = Usuario.builder()
                    .matricula(req.getMatricula())
                    .nome(req.getNome())
                    .email(req.getEmail())
                    .senha(req.getSenha())
                    .tipoAcesso(req.getTipoAcesso())
                    .build();

            authService.cadastrar(usuario, req.getConfirmarSenha());

            return ResponseEntity.ok(Map.of("mensagem", "Cadastro realizado com sucesso!"));

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("mensagem", e.getMessage()));
        }
    }
}
