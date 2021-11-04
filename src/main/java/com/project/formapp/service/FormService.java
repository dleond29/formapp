package com.project.formapp.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.formapp.dto.FormDto;
import com.project.formapp.entity.Form;
import com.project.formapp.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class FormService implements IFormService {

    @Autowired
    FormRepository formRepository;

    @Autowired
    ObjectMapper mapper;

    public void createResponse(FormDto formDto){
        Form form = mapper.convertValue(formDto, Form.class);
        formRepository.save(form);
    }

    public FormDto checkAnswer(Long id){
        FormDto formDto = null;
        Optional<Form> formOptional = formRepository.findById(id);
        if(formOptional.isPresent()){
            formDto = mapper.convertValue(formOptional, FormDto.class);
        }
        return formDto;
    }

    public void updateAnswer(FormDto formDto){
        Form form = mapper.convertValue(formDto, Form.class);
        formRepository.save(form);
    }

    public void deleteAnswer(Long id){
        formRepository.deleteById(id);
    }

    public Collection<FormDto> getAll(){
        List<Form> formList = formRepository.findAll();
        Set<FormDto> formDtoSet = new HashSet<>();
        for (Form form : formList) {
            FormDto formDto;
            formDto = mapper.convertValue(form, FormDto.class);
            formDtoSet.add(formDto);
        }
        return formDtoSet;
    }



}
