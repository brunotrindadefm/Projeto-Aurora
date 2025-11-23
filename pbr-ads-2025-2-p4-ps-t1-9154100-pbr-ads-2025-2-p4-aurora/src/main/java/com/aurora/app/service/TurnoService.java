package com.aurora.app.service;

import org.springframework.stereotype.Service;
import com.aurora.app.entity.Turno;
import com.aurora.app.repository.TurnoRepository;

@Service
public class TurnoService extends BaseService<Turno, Long> {

    public TurnoService(TurnoRepository repository) {
        super(repository);
    }
}