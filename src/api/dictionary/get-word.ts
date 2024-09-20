import { AxiosInstance } from "axios";
import { GetWord } from "./entities";
import { Dispatch, SetStateAction } from "react";

const getWord =
  (axios: AxiosInstance) =>
  async (
    word: string,
    setError: Dispatch<SetStateAction<boolean>>
  ): Promise<GetWord | undefined> => {
    try {
      const result = await axios.get<GetWord>(`/entries/en/${word}`);
      setError(false);
      return result.data;
    } catch {
      setError(true);
    }
  };

export { getWord };
