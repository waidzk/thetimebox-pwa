import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function BrainDump() {
  const [contentBrainDump, setContentBrainDump] = useState(
    localStorage.getItem("contentBrainDump")
      ? JSON.parse(localStorage.getItem("contentBrainDump"))
      : ""
  );
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleEditorChange = (content) => {
    setContentBrainDump(content);
  };

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener('online', handleStatusChange);

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);

  useEffect(() => {
    localStorage.setItem("contentBrainDump", JSON.stringify(contentBrainDump));
  }, [contentBrainDump]);

  return (
    <div className="mt-5 mb-14">
      <h1 className="text-[#004643] text-lg mb-2">Brain Dump</h1>
      {isOnline ? (
        <Editor
          value={contentBrainDump}
          onEditorChange={handleEditorChange}
          init={{
            menubar: false,
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          apiKey="ku0z08op3ds2amlfppg1zqjf82t8vk5n1g85plodd4rba8u0"
        />
      ) : (
        <span>
          <p>You are Offline</p>
          <span dangerouslySetInnerHTML={{__html : contentBrainDump}}></span>
        </span>
      )}
    </div>
  );
}
