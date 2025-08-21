import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "../../../lib/api";
import type { Note } from "../../../types/note";
import css from "./NoteList.module.css";
import Link from "next/link";

interface NoteListProps {
  notes: Note[];
}

function NoteList({ notes }: NoteListProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  return (
    <ul className={css.list}>
      {notes.map((note: Note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <div className={css.footer}>
              <Link
                className={`${css.link} ${css.button}`}
                href={`/notes/${note.id}`}
              >
                View details
              </Link>
              <button
                className={css.button}
                onClick={() => mutate(note.id)}
                disabled={isPending}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
