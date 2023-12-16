import React from "react";
import getFoldersAndImages from "@/utils/folder-count";
import dynamic from "next/dynamic";

const DynamicImage = dynamic(() => import("next/image"), { ssr: false });

export default function Home() {
  const folderData = getFoldersAndImages("public");
  return (
    <>
      <div>
        <h1>Folders and Images</h1>
        {folderData.map((folder) => (
          <div key={folder.folderName}>
            <h2>{folder.folderName}</h2>
            {folder.images.map((image) => (
              <DynamicImage
                src={`/${folder.folderName}/${image}`}
                alt={image}
                width={500}
                height={300}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
