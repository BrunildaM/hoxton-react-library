type Props = {
  type: string;
  value: string;
  placeholder: string
    
  };
  
  export function Input({ type, value, placeholder, ...props }: Props) {
    return (
        <input className="input" {...props} />
   
    );
  }

  