"use client";

import { GetWord } from "@/api/dictionary/entities";
import { Audio } from "@/components/Audio/Audio";
import { Form } from "@/components/Form/Form";
import { Header } from "@/components/global/Header";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Home() {
  const [apiResponse, setApiResponse] = useState<GetWord>();

  return (
    <div className="max-w-[600px] mx-auto">
      <Header />

      {/* Input Section */}
      <section>
        <Form setApiResponse={setApiResponse} />
      </section>

      {/* Response Section */}
      {apiResponse &&
        apiResponse.map((data) => (
          <section key={data.word} className="my-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-2xl font-semibold mb-2">{data.word}</h1>
                <p className="text-blue-500">
                  {data.phonetic && data.phonetic}
                </p>
              </div>
              {data.phonetics.length > 0 && <Audio data={data.phonetics} />}
            </div>

            {data.meanings &&
              data.meanings.map((d) => (
                <div className="mb-8">
                  <div className="w-full flex items-center gap-x-5 mb-4">
                    <h2 className="w-[20%] text-lg font-semibold">
                      {d.partOfSpeech}
                    </h2>
                    <Separator className="w-[80%]" />
                  </div>
                  <div className="mb-6">
                    <h3 className="text-gray-500 mb-4">Meaning</h3>
                    <ul>
                      {d.definitions &&
                        d.definitions.map((def) => (
                          <li key={def.definition} className="mb-2">
                            - {def.definition}{" "}
                            {def.example && (
                              <span className="text-sm text-gray-500">
                                ({def.example})
                              </span>
                            )}
                          </li>
                        ))}
                    </ul>
                  </div>
                  {d.synonyms && d.synonyms.length > 0 && (
                    <div>
                      <h3 className="text-gray-500 mb-4">
                        Synonyms{" "}
                        {d.synonyms.map((synonym) => (
                          <span
                            key={synonym}
                            className="text-sm text-blue-500 pl-3"
                          >
                            {synonym}
                          </span>
                        ))}
                      </h3>
                    </div>
                  )}
                </div>
              ))}
            {data.sourceUrls &&
              data.sourceUrls.map((url) => (
                <div className="mb-2">
                  <Separator className="my-4" />
                  <div>
                    <h3 className="text-gray-500 mb-4">
                      Source{" "}
                      <a
                        href={url}
                        target="_blank"
                        className="text-sm underline pl-1"
                      >
                        {url}
                      </a>
                    </h3>
                  </div>
                </div>
              ))}
          </section>
        ))}
    </div>
  );
}
