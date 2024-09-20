type GetWord = ReadonlyArray<{
  word: string;
  phonetic: string;
  phonetics: Phonetics;
  origin: string;
  meanings: Meanings;
  sourceUrls: SourceUrls;
}>;

type Phonetics = ReadonlyArray<{
  text: string;
  audio: string;
}>;

type Meanings = ReadonlyArray<{
  partOfSpeech: string;
  definitions: Definitions;
  synonyms: Synonyms;
}>;

type Definitions = ReadonlyArray<{
  definition: string;
  example: string;
  synonyms: [];
  antonyms: [];
}>;

type Synonyms = ReadonlyArray<string>;

type SourceUrls = ReadonlyArray<string>;

export type { GetWord, Phonetics };
