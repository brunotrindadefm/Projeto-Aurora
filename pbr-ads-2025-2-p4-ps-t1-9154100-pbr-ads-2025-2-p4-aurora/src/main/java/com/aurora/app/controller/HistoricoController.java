package com.aurora.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurora.app.entity.Historico;
import com.aurora.app.service.BaseService;
import com.aurora.app.service.HistoricoService;

@RestController
@RequestMapping("/api/historico")
public class HistoricoController extends BaseController<Historico, Long> {

    @Autowired
    private HistoricoService service;

    @Override
    protected BaseService<Historico, Long> getService() {
        return service;
    }
}
