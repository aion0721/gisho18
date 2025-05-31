import type { Meta, StoryObj } from "@storybook/react";
import TodoList from "./TodoList";
import type { TodoType } from "../types/todo";

const meta: Meta<typeof TodoList> = {
  title: "Components/TodoList",
  component: TodoList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TodoList>;

const sampleTodos: TodoType[] = [
  { id: "1", title: "本を書く", status: "NEW" },
  { id: "2", title: "メールを返す", status: "DONE" },
  { id: "3", title: "ご飯を作る", status: "NEW" },
];

export const Default: Story = {
  args: {
    todos: sampleTodos,
  },
};

export const AllDone: Story = {
  args: {
    todos: [
      { id: "1", title: "本を書く", status: "DONE" },
      { id: "2", title: "掃除する", status: "DONE" },
    ],
  },
};

export const Empty: Story = {
  args: {
    todos: [],
  },
};
