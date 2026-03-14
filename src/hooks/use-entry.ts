import useLocalStorage from "use-local-storage";
import { ENTRY_KEY } from "../models/entry";

export default function useEntry() {
  const [ entryList ] = useLocalStorage(ENTRY_KEY, []);

  return {
    entryList
  }
}