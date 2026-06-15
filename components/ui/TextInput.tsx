import { forwardRef, type InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-1">
        <input
          ref={ref}
          className={`w-full rounded border px-3 py-2 outline-none transition focus:border-black ${
            error ? "border-red-500" : "border-gray-300"
          } ${className}`}
          aria-invalid={Boolean(error)}
          {...props}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
