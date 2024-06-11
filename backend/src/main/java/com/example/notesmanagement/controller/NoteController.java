package com.example.notesmanagement.controller;

import com.example.notesmanagement.dto.NoteDto;
import com.example.notesmanagement.dto.NoteRequestDto;
import com.example.notesmanagement.service.NoteService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Notes management", description = "Endpoint for managing notes")
@RequiredArgsConstructor
@RestController
@RequestMapping("/notes")
public class NoteController {
    private final NoteService noteService;

    @GetMapping
    @Operation(summary = "Get all notes", description = "Get a list of all existing notes")
    public List<NoteDto> getAllNotes(Pageable pageable) {
        return noteService.findAll(pageable);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get note by id", description = "Get note by specific id")
    public NoteDto getNoteById(@PathVariable Long id) {
        return noteService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "Create a new note", description = "Create a new note")
    public NoteDto createNote(@RequestBody @Valid NoteRequestDto requestDto) {
        return noteService.save(requestDto);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update existing note", description = "Update existing note")
    public NoteDto updateNote(
            @PathVariable Long id,
            @RequestBody @Valid NoteRequestDto requestDto
    ) {
        return noteService.update(id, requestDto);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete note by id", description = "Delete note by specific id")
    public void delete(@PathVariable Long id) {
        noteService.deleteById(id);
    }
}
