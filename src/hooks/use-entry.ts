import useLocalStorage from "use-local-storage";
import { ENTRY_KEY } from "../constants";
import type { Entry } from "../models";

export default function useEntry() {
  const [ entryList, setEntryList ] = useLocalStorage<Entry[]>(ENTRY_KEY, []);

  function getEntryListByDate(date: string) {
    return [...entryList.filter(entry => entry.date === date)];
  }

  async function saveEntry (newEntry: Entry) {
    if (newEntry) {
      setEntryList([...entryList, newEntry]);
      return [...entryList, newEntry];
    }
    return entryList;
  }

  async function removeEntry(id: string) {
    const filteredEntryList = entryList.filter(entry => entry.id !== id);
    if (filteredEntryList) {
      setEntryList([...filteredEntryList]);
      return [...filteredEntryList];
    }
    return entryList;
  }

  return {
    entryList,
    getEntryListByDate,
    saveEntry,
    removeEntry
  }
}