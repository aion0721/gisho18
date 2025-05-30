import { useState } from "react";
import { open } from "@tauri-apps/plugin-dialog";
import { readTextFile } from "@tauri-apps/plugin-fs";

const About = () => {
  const [filePath, setFilePath] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null);

  const handleOpenFile = async () => {
    try {
      const selected = await open({
        multiple: false,
        filters: [
          {
            name: "Text Files",
            extensions: ["txt", "md", "log"],
          },
        ],
      });

      if (typeof selected === "string") {
        setFilePath(selected);
        const content = await readTextFile(selected);
        setFileContent(content);
      }
    } catch (error) {
      console.error("ファイルの読み込みに失敗しました:", error);
    }
  };

  return (
    <div>
      <h1>About</h1>
      <button onClick={handleOpenFile}>ファイルを選択</button>
      {filePath && (
        <div>
          <h2>選択されたファイル:</h2>
          <p>{filePath}</p>
        </div>
      )}
      {fileContent && (
        <div>
          <h2>ファイルの内容:</h2>
          <pre>{fileContent}</pre>
        </div>
      )}
    </div>
  );
};

export default About;
