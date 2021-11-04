package com.project.formapp.controller;

import com.project.formapp.dto.FormDto;
import com.project.formapp.service.IFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/response")
public class FormController {

    @Autowired
    IFormService formService;

    @PostMapping
    public ResponseEntity<?> addResponse(@RequestBody FormDto formDto)
    {
        formService.createResponse(formDto);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public FormDto getResponse(@PathVariable long id)
    {
        return formService.checkAnswer(id);
    }

    @PutMapping
    public ResponseEntity<?> updateResponse(@RequestBody FormDto formDto)
    {
        formService.updateAnswer(formDto);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteResponse(@PathVariable long id)
    {
        formService.deleteAnswer(id);
        return ResponseEntity.status(HttpStatus.OK).body("Deleted");
    }

    @GetMapping("/list")
    public Collection<FormDto> formDtoCollection()
    {
        return formService.getAll();
    }


}
