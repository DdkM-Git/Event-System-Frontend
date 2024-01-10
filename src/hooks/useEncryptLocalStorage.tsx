import { EncryptStorage } from "encrypt-storage";

function useEncryptLocalStorage() {
  const encryptStorage = new EncryptStorage("aaaaaaaaaa");

  function encryptLocalStorage(name: string, value: string) {
    encryptStorage.setItem(name, value);
  }

  function decryptLocalStorage(name: string) {
    return encryptStorage.getItem<string>(name);
  }

  return { set: encryptLocalStorage, get: decryptLocalStorage };
}

export default useEncryptLocalStorage;
