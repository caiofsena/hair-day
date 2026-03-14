import useLocalStorage from "use-local-storage";
import { ENTRY_KEY, EntryListData } from "../constants";
import type { Entry } from "../models";

export default function useEntry() {
  const [ entryList, setEntryList ] = useLocalStorage<Entry[]>(ENTRY_KEY, []);

  async function loadEntryList() {
    setEntryList(EntryListData);
  } 

  return {
    entryList,
    loadEntryList
  }
}