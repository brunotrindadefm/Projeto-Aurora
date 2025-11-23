package com.aurora.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.aurora.app.entity.Usuario;
import com.aurora.app.repository.AuthRepository;

@Service
public class AuthService {

    @Autowired
    private AuthRepository usuarioRepository;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public Usuario cadastrar(Usuario usuario, String confirmarSenha) {

        if (!usuario.getSenha().equals(confirmarSenha)) {
            throw new RuntimeException("As senhas não conferem!");
        }

        if (usuarioRepository.findByEmail(usuario.getEmail()).isPresent()) {
            throw new RuntimeException("E-mail já cadastrado!");
        }

        if (usuarioRepository.findByMatricula(usuario.getMatricula()).isPresent()) {
            throw new RuntimeException("Matrícula já cadastrada!");
        }

        usuario.setSenha(encoder.encode(usuario.getSenha()));

        return usuarioRepository.save(usuario);
    }

    public Usuario login(String matricula, String senha) {
        Usuario usuario = usuarioRepository.findByMatricula(matricula)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));

        if (!encoder.matches(senha, usuario.getSenha())) {
            throw new RuntimeException("Senha incorreta!");
        }

        return usuario;
    }
}
