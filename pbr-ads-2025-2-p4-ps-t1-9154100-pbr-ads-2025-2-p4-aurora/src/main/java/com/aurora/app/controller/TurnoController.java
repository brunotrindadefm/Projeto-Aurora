package com.aurora.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.aurora.app.entity.Turno;
import com.aurora.app.service.BaseService;
import com.aurora.app.service.TurnoService;

@RestController
@RequestMapping("/api/turno")
public class TurnoController extends BaseController<Turno, Long> {

    @Autowired
    private TurnoService service;

    @Override
    protected BaseService<Turno, Long> getService() {
        return service;
    }
}
