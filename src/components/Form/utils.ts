import { getWordAxios } from "@/api/api";
import { GetWord } from "@/api/dictionary/entities";
import { Dispatch, FormEventHandler, SetStateAction } from "react";

const onSubmit =
  (
    toast: any,
    setApiResponse: Dispatch<SetStateAction<GetWord | undefined>>
  ): FormEventHandler<HTMLFormElement> | undefined =>
  async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const word = formData.get("word") as string;

    if (word) setApiResponse(await getWordAxios(word, toast));
  };

export { onSubmit };
