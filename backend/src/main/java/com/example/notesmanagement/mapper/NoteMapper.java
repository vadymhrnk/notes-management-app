package com.example.notesmanagement.mapper;

import com.example.notesmanagement.config.MapperConfig;
import com.example.notesmanagement.dto.NoteDto;
import com.example.notesmanagement.dto.NoteRequestDto;
import com.example.notesmanagement.model.Note;
import java.util.List;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface NoteMapper {
    NoteDto toDto(Note note);

    Note toModel(NoteRequestDto requestDto);

    @IterableMapping(elementTargetType = NoteDto.class)
    List<NoteDto> toDtoList(List<Note> noteList);
}
