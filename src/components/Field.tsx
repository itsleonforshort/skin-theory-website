import { useId } from 'react';
import type { ChangeEvent, FocusEvent, Ref } from 'react';

interface BaseFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  helper: string;
  error?: string;
  name: string;
  autoComplete?: string;
  inputRef?: Ref<HTMLInputElement>;
}

/**
 * Label above the input, helper text always in the markup, error text below
 * with a 2px left border on the field. Never a placeholder used as a label.
 * design/DESIGN-SYSTEM.md §7.2.
 */
export function TextField({
  label,
  value,
  onChange,
  onBlur,
  helper,
  error,
  name,
  type = 'text',
  autoComplete,
  inputRef,
}: BaseFieldProps & { type?: 'text' | 'email' | 'tel' }) {
  const id = useId();
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;

  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        name={name}
        type={type}
        className="field-input"
        value={value}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${errorId} ${helperId}` : helperId}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        onBlur={onBlur}
      />
      {error ? (
        <span className="field-error" id={errorId}>
          {error}
        </span>
      ) : null}
      <span className="field-helper" id={helperId}>
        {helper}
      </span>
    </div>
  );
}

export function TextAreaField({
  label,
  value,
  onChange,
  onBlur,
  helper,
  error,
  name,
  textAreaRef,
}: Omit<BaseFieldProps, 'inputRef' | 'autoComplete'> & { textAreaRef?: Ref<HTMLTextAreaElement> }) {
  const id = useId();
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;

  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <textarea
        ref={textAreaRef}
        id={id}
        name={name}
        rows={6}
        className="field-input"
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${errorId} ${helperId}` : helperId}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value)}
        onBlur={onBlur}
      />
      {error ? (
        <span className="field-error" id={errorId}>
          {error}
        </span>
      ) : null}
      <span className="field-helper" id={helperId}>
        {helper}
      </span>
    </div>
  );
}

interface SelectFieldProps extends Omit<BaseFieldProps, 'inputRef' | 'autoComplete'> {
  options: { value: string; label: string }[];
  placeholder: string;
  selectRef?: Ref<HTMLSelectElement>;
}

export function SelectField({
  label,
  value,
  onChange,
  onBlur,
  helper,
  error,
  name,
  options,
  placeholder,
  selectRef,
}: SelectFieldProps) {
  const id = useId();
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;

  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <select
        ref={selectRef}
        id={id}
        name={name}
        className="field-input"
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${errorId} ${helperId}` : helperId}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)}
        onBlur={(_event: FocusEvent<HTMLSelectElement>) => onBlur?.()}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <span className="field-error" id={errorId}>
          {error}
        </span>
      ) : null}
      <span className="field-helper" id={helperId}>
        {helper}
      </span>
    </div>
  );
}
