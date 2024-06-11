package com.example.notesmanagement.service;

import com.example.notesmanagement.dto.NoteDto;
import com.example.notesmanagement.dto.NoteRequestDto;
import java.util.List;
import org.springframework.data.domain.Pageable;

public interface NoteService {
    List<NoteDto> findAll(Pageable pageable);

    NoteDto findById(Long id);

    NoteDto save(NoteRequestDto requestDto);

    NoteDto update(Long id, NoteRequestDto requestDto);

    void deleteById(Long id);
}
