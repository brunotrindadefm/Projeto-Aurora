package com.aurora.app.service;

import org.springframework.stereotype.Service;

import com.aurora.app.entity.RegimeTrabalho;
import com.aurora.app.repository.RegimeTrabalhoRepository;

@Service
public class RegimeTrabalhoService extends BaseService<RegimeTrabalho, Long> {

    public RegimeTrabalhoService(RegimeTrabalhoRepository repository) {
        super(repository);
    }
}