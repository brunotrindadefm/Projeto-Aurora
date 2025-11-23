package com.aurora.app.controller;

import com.aurora.app.entity.Dedicacao;
import com.aurora.app.service.BaseService;
import com.aurora.app.service.DedicacaoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dedicacao")
public class DedicacaoController extends BaseController<Dedicacao, Long> {

   @Autowired
    private DedicacaoService service;

    @Override
    protected BaseService<Dedicacao, Long> getService() {
        return service;
    }
}