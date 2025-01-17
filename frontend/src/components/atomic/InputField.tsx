import { InputText } from 'primereact/inputtext';
import { forwardRef, ForwardedRef } from 'react';
import { InputTextProps } from 'primereact/inputtext';

interface InputFieldProps extends Omit<InputTextProps, 'ref'> {
  label?: string;
  error?: string;
}

const InputField = forwardRef(({ 
  id, 
  type = 'text', 
  label, 
  error, 
  className = '', 
  ...props 
}: InputFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const baseInputClasses = 
    'w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600';

  return (
    <div className="space-y-1">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-gray-900 dark:text-white text-sm font-medium"
        >
          {label}
        </label>
      )}
      <InputText
        id={id}
        type={type}
        className={`${baseInputClasses} ${error ? 'border-red-500' : ''} ${className}`}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="text-red-500 dark:text-red-400 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
});

InputField.displayName = 'InputField';

export default InputField; 