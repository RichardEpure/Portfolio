export default interface Card {
  type: "education" | "experience" | "project";
  title: string;
  subtitle?: string;
  content?: string;
  skills?: string[];
  date: string;
  url?: string;
}
