import React, { useState } from "react";

const Folder = ({ handleInsertNode,explorer }) => {
  const [expand,setExpand] = useState(false);
  const [showInput,setShowInput] = useState({
    visible: false,
    isFolder:null
  });

const handleNewFolder = (e,isFolder)=>{
  e.stopPropagation();
  setExpand(true);
  setShowInput({
    visible: true,
    isFolder:isFolder
  });
}

const onAddFolder = (e)=>{
if(e.keyCode===13 && e.target.value){
  handleInsertNode(explorer.id,e.target.value,showInput.isFolder);
  setShowInput({...showInput,visible:false});
}
}
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "5px" }}>
        <div className="folder" onClick={()=>setExpand(!expand)}>
          <span>📁 {explorer.name}</span>

          <div>
            <button onClick={(e)=>handleNewFolder(e,true)}>Folder +</button>
            <button onClick={(e)=>handleNewFolder(e,false)}>File +</button>
          </div>
        </div>
        <div style={{display:expand ? "block" : "none", paddingLeft:25}}>
        {
          showInput.visible && (
            <div className="container">
            <span className="inputContainer">{showInput.isFolder ? "📂" : "📄"}</span>
              <input
              className="inputContainer__input"
                type="text"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={()=>setShowInput({...showInput,visible:false})}
                />
            </div>
          )
        }
          {explorer.items.map((i) => (
            <Folder handleInsertNode={handleInsertNode} explorer={i} key={i.id}/>
          ))}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
};

export default Folder;
