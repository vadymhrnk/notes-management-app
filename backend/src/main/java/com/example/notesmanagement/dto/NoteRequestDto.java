package com.example.notesmanagement.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class NoteRequestDto {
    @NotBlank
    private String title;
    private String description;
}
