
import { LineGraphChart } from "@/components/line-graph-chart";
import { QuestionAnalysis } from "@/components/question-analysis";
import SkillCard from "@/components/skill-card";
import { SyllabusWiseAnalysis } from "@/components/syllabus-wise-analysis";
import { Card, CardHeader } from "@/components/ui/card";
import { redirect } from "next/navigation";

export default function Home() {

  if (typeof window === 'undefined') {
    redirect('/skill-test');
  }
  return (
    <div>Home</div>
  );
}
