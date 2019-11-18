import { getRandomNumber } from "@/utils/util";

export function generateId(inUse) {
  const newId = getRandomNumber();

  inUse.forEach(todo => {
    if (todo.id === newId) generateId(inUse);
  });

  return newId;
}