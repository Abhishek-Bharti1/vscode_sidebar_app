import { useState } from "react";
import Folder from "./components/Folder";
import explorer from "./data/folderData";
import useTraverseTree from "./hooks/use-traverse-tree";

function App() {
  const { insertNode } = useTraverseTree();
  const [folderData, setFolderData] = useState(explorer);
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorer, folderId, item, isFolder);
    setFolderData(finalTree);
  };
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorer} />
    </div>
  );
}

export default App;
