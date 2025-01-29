import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const TextEditor = () => {
    const editor = useRef(null);
    const [content, setContent] = React.useState("");

    return (
        <div className="mx-auto">
            <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
                <JoditEditor
                    ref={editor}
                    value={content}
                    onChange={(newContent) => setContent(newContent)}
                    config={{
                        readonly: false,
                        placeholder: "Start typing here...",
                        toolbarAdaptive: false,
                        toolbarSticky: false,
                    }}
                />
            </div>
            <div className="flex gap-2 my-3">
                <button className="px-3 text-white rounded hover:bg-red-700 py-1 bg-red-500"> <FontAwesomeIcon icon={faXmark}/> Cancle</button>
                <button className="px-3 text-white rounded hover:bg-green-700 py-1 bg-green-500"> save <FontAwesomeIcon icon={faPaperPlane}/></button>
            </div>
        </div>
    );
};

export default TextEditor;