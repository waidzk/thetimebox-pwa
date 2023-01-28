import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function BrainDump() {
  const [contentBrainDump, setContentBrainDump] = useState(
    localStorage.getItem("contentBrainDump")
      ? JSON.parse(localStorage.getItem("contentBrainDump"))
      : ""
  );

  const handleEditorChange = (content) => {
    setContentBrainDump(content);
  };

  useEffect(() => {
    localStorage.setItem("contentBrainDump", JSON.stringify(contentBrainDump));
  }, [contentBrainDump]);

  return (
    <div className="mt-5">
      <h1 className="text-sm text-[#272343] pl-5">Brain Dump</h1>
      <div className="box border-y border-[#272343]">
        <Editor
          value={contentBrainDump}
          onEditorChange={handleEditorChange}
          init={{
            height: 500,
            menubar: false,
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          apiKey="ku0z08op3ds2amlfppg1zqjf82t8vk5n1g85plodd4rba8u0"
        />
      </div>
    </div>
  );
}
