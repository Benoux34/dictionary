import axios from "axios";
import { getWord } from "./dictionary/get-word";

const dictionaryBaseUrl = process.env.NEXT_PUBLIC_DICTIONARY_API_BASE_URL;

const axiosDictionaryInstance = axios.create({
  baseURL: dictionaryBaseUrl,
  timeout: 1000,
});

const getWordAxios = getWord(axiosDictionaryInstance);

export { getWordAxios };
