import { useRecoilState } from "recoil";
import { titleState, descriptionState, Note } from "../../state/notesState";
import { useTranslation } from "react-i18next";
import "./NoteForm.scss";

interface NoteFormProps {
  handleAddNote: (event: React.FormEvent) => void;
  handleUpdateNote: (event: React.FormEvent) => void;
  handleCancel: () => void;
  selectedNote: Note | null;
}

export const NoteForm: React.FC<NoteFormProps> = ({
  handleAddNote,
  handleUpdateNote,
  handleCancel,
  selectedNote,
}) => {
  const { t } = useTranslation(["common"]);
  const [title, setTitle] = useRecoilState(titleState);
  const [description, setDescription] = useRecoilState(descriptionState);

  return (
    <form
      className="note-form"
      onSubmit={(event) =>
        selectedNote ? handleUpdateNote(event) : handleAddNote(event)
      }
    >
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder={t("noteTitle")}
        required
      ></input>
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder={t("noteDescription")}
        rows={10}
      ></textarea>
      {selectedNote ? (
        <div className="edit-buttons">
          <button type="submit">{t("saveNote")}</button>
          <button type="button" onClick={handleCancel}>
            {t("cancelNote")}
          </button>
        </div>
      ) : (
        <button type="submit">{t("addNote")}</button>
      )}
    </form>
  );
};
