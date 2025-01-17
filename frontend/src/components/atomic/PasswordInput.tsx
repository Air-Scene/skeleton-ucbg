import { useState, forwardRef } from 'react';
import { Button, InputField } from '@/components/atomic';
import type { ComponentProps } from 'react';

type PasswordInputProps = Omit<ComponentProps<typeof InputField>, 'type'> & {
  autocomplete?: 'current-password' | 'new-password';
};

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ 
  className = '', 
  autocomplete,
  ...props 
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <InputField
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        className={`${className} pr-10`}
        autoComplete={autocomplete}
        {...props}
      />
      <Button
        type="button"
        icon={showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'}
        className="absolute right-3 top-5"
        onClick={() => setShowPassword(!showPassword)}
        rounded 
        text
      />
    </div>
  );
});

// Add display name for better debugging
PasswordInput.displayName = 'PasswordInput';

export default PasswordInput; 