import useLocalStorage from "use-local-storage";
import { ENTRY_KEY } from "../constants";
import type { Entry } from "../models";

export default function useEntry() {
  const [ entryList, setEntryList ] = useLocalStorage<Entry[]>(ENTRY_KEY, []);

  async function saveEntry (newEntry: Entry) {
    if (newEntry) {
      setEntryList([...entryList, newEntry]);
      return [...entryList, newEntry];
    }
    return entryList;
  }

  return {
    entryList,
    saveEntry
  }
}