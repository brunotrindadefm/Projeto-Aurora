package com.aurora.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aurora.app.entity.Usuario;

import java.util.Optional;

public interface AuthRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(String email);

    Optional<Usuario> findByMatricula(String matricula);

}