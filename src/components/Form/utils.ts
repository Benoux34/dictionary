import { getWordAxios } from "@/api/api";
import { GetWord } from "@/api/dictionary/entities";
import { Dispatch, FormEventHandler, SetStateAction } from "react";

const onSubmit =
  (
    setApiResponse: Dispatch<SetStateAction<GetWord | undefined>>,
    setError: Dispatch<SetStateAction<boolean>>
  ): FormEventHandler<HTMLFormElement> | undefined =>
  async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const word = formData.get("word") as string;

    if (word) setApiResponse(await getWordAxios(word, setError));
  };

export { onSubmit };
