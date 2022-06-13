import os from "os";
export function nameType() {
  return console.log(`Привет, юзер. Вижу ты зашел с ${os.type()}`);
}

