import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export interface CustomTextareaHTMLAttributes
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  value?: string;
}
