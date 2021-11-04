package com.project.formapp.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="Responses")
@Getter @Setter
public class Form {

    @Id
    @SequenceGenerator(name = "form_sequence", sequenceName = "form_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "form_sequence")
    private Long id;

    private Integer document;
    private String email;
    private String comment;
    private String brand;
    private LocalDate date;

}
