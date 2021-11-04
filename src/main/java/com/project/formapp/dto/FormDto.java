package com.project.formapp.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class FormDto {
    private Long id;
    private Integer document;
    private String email;
    private String comment;
    private String brand;
    private LocalDate date;

}
