"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
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
  const [error, setError] = useState<boolean>(false);

  const HandleSubmit = onSubmit(setApiResponse, setError);

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        description: "There was a problem with your word.",
      });
    }
  }, [error]);

  return (
    <form onSubmit={HandleSubmit} className="flex items-center gap-3">
      <Input name="word" placeholder="Search any word" />
      <Button type="submit">Search</Button>
    </form>
  );
};

export { Form };
