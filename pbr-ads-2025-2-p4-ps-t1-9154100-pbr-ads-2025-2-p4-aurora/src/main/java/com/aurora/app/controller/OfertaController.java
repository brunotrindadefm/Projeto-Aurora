package com.aurora.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aurora.app.entity.Oferta;
import com.aurora.app.service.BaseService;
import com.aurora.app.service.OfertaService;

@RestController
@RequestMapping("/api/oferta")
public class OfertaController extends BaseController<Oferta, Long> {

    @Autowired
    private OfertaService service;

    @Override
    protected BaseService<Oferta, Long> getService() {
        return service;
    }
}
