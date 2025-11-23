package com.aurora.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.aurora.app.entity.Disciplina;
import com.aurora.app.entity.PlanoEnsino;

public interface PlanoEnsinoRepository extends BaseRepository<PlanoEnsino, Long> {
    @Query("""
                SELECT d
                FROM Disciplina d
                WHERE d.id NOT IN (
                    SELECT p.disciplina.id FROM PlanoEnsino p
                )
            """)
    List<Disciplina> findDisciplinasSemPlano();
}
