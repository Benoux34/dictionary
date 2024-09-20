"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { onSubmit } from "./utils";
import { useToast } from "@/hooks/use-toast";
import { GetWord } from "@/api/dictionary/entities";

const Form = ({
  setApiResponse,
}: {
  setApiResponse: Dispatch<SetStateAction<GetWord | undefined>>;
}) => {
  const { toast } = useToast();

  const HandleSubmit = onSubmit(toast, setApiResponse);

  return (
    <form onSubmit={HandleSubmit} className="flex items-center gap-3">
      <Input name="word" placeholder="Search any word" />
      <Button type="submit">Search</Button>
    </form>
  );
};

export { Form };
