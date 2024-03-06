export interface todoType {
  id: Text;
  title: Text | null;
  isCompleted: boolean;
  todo: todoType;
  text: Text;
}
