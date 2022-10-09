import { useRef } from "react";
import { useAutosizeTextArea } from "./helpers";
import { CustomTextareaHTMLAttributes } from "./TextArea.types";

/** textarea с динамической высотой */
const TextArea = (props: CustomTextareaHTMLAttributes) => {
  const { value } = props;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef.current, value);
  return <textarea {...props} ref={textAreaRef} rows={1} />;
};

export { TextArea };
