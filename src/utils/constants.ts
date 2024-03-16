const SITE_NAME = "Brocolli Dollar Protocol";
const SITE_DESCRIPTION =
  "Discover the Brocolli Dollar Protocol: A powerful tool designed to help you achieve your goals. Learn more about our innovative approach.";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const STATIC_TASKS: Task[] = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Finish report", completed: true },
  { id: 3, title: "Clean the house", completed: false },
];

const paths = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/tasks",
    name: "Tasks",
  },
  {
    path: "/teams",
    name: "Teams",
  },
];

export { SITE_NAME, STATIC_TASKS, paths, SITE_DESCRIPTION };
export type { Task };
