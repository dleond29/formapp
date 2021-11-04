package com.project.formapp.service;

import com.project.formapp.dto.FormDto;

import java.util.*;

public interface IFormService {

    public void createResponse(FormDto formDto);

    public FormDto checkAnswer(Long id);

    public void updateAnswer(FormDto formDto);

    public void deleteAnswer(Long id);

    public Collection<FormDto> getAll();
}
