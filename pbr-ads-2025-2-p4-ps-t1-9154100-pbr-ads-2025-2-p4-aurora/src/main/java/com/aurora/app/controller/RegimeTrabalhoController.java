package com.aurora.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.aurora.app.entity.RegimeTrabalho;
import com.aurora.app.service.BaseService;
import com.aurora.app.service.RegimeTrabalhoService;

@RestController
@RequestMapping("/api/regime-trabalho")
public class RegimeTrabalhoController extends BaseController<RegimeTrabalho, Long> {
    @Autowired
    private RegimeTrabalhoService service;

    @Override
    protected BaseService<RegimeTrabalho, Long> getService() {
        return service;
    }
}

