import { Label } from '@/components/ui/label';
import { Input } from '../ui/input';

import cn from 'clsx';
const InputField = ({
  name,
  label,
  placeholder,
  type = 'text',
  register,
  error,
  disabled,
  value,
  validation,
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Input
        {...register(name, validation)}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        className={cn('form-input', {
          'opacity-50 cursor-not-allowed': disabled,
        })}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputField;
