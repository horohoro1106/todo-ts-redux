/// <reference types="vite/client" />

type Todo = {
  id: number;
  title: string;
  status: statusType;
};

type ActionType = {
  id: number;
  newStatus: statusType;
};

type statusType = "done" | "inProgress" | "todo";
