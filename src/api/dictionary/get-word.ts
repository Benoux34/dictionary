import { AxiosInstance } from "axios";
import { GetWord } from "./entities";

const getWord =
  (axios: AxiosInstance) =>
  async (word: string, toast: any): Promise<GetWord | undefined> => {
    try {
      const result = await axios.get<GetWord>(`/entries/en/${word}`);
      return result.data;
    } catch {
      toast({
        variant: "destructive",
        description: "There was a problem with your word.",
      });
    }
  };

export { getWord };
