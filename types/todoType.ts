export interface todoType {
  id: string;
  title: string | null;
  isCompleted: boolean;
  todo: todoType;
  text: string;
}
