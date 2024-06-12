package com.example.notesmanagement.service.impl;

import com.example.notesmanagement.dto.NoteDto;
import com.example.notesmanagement.dto.NoteRequestDto;
import com.example.notesmanagement.exception.EntityNotFoundException;
import com.example.notesmanagement.mapper.NoteMapper;
import com.example.notesmanagement.model.Note;
import com.example.notesmanagement.repository.NoteRepository;
import com.example.notesmanagement.service.NoteService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class NoteServiceImpl implements NoteService {
    public static final String ENTITY_NOT_FOUND_MESSAGE = "Can't find note by id: ";
    private final NoteRepository noteRepository;
    private final NoteMapper noteMapper;

    @Override
    public List<NoteDto> findAll(Pageable pageable) {
        List<Note> notes = noteRepository.findAll(pageable).getContent();
        return noteMapper.toDtoList(notes);
    }

    @Override
    public NoteDto findById(Long id) {
        Note note = noteRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException(ENTITY_NOT_FOUND_MESSAGE + id)
        );
        return noteMapper.toDto(note);
    }

    @Override
    @Transactional
    public NoteDto save(NoteRequestDto requestDto) {
        Note note = noteMapper.toModel(requestDto);
        return noteMapper.toDto(noteRepository.save(note));
    }

    @Override
    @Transactional
    public NoteDto update(Long id, NoteRequestDto requestDto) {
        Note note = noteRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException(ENTITY_NOT_FOUND_MESSAGE + id)
        );
        note.setTitle(requestDto.getTitle());
        note.setDescription(requestDto.getDescription());
        return noteMapper.toDto(noteRepository.save(note));
    }

    @Override
    public void deleteById(Long id) {
        noteRepository.deleteById(id);
    }
}
