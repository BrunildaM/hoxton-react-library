type Props = {
    children: string;
    
  };
  
  export function Input({ children, ...props }: Props) {
    return (
      <label>
        {children}
        <input {...props} />
      </label>
    );
  }