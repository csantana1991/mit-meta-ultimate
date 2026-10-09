import { createFileRoute } from "@tanstack/react-router";
import { StudyDesk } from "@/components/study-desk";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <StudyDesk />;
}
