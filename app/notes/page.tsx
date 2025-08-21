import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import Notes from "./Notes.client";

export default async function NotesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", { page: 1, perPage: 12, search: "" }],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        search: "",
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Notes />
    </HydrationBoundary>
  );
}
