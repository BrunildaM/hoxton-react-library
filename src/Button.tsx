type Props = {
  children: string;
  variant?: "primary" | "secondary" | "success" | "warning";
};

export default function Button({ children, variant, ...rest }: Props) {
  let style: any = {
    colour: "black", 
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    cursor: "pointer"
  };

  if (variant === "primary") {
    style.colour= "#fff" ,
    style.backgroundColor = "#0d6efd";
    style.paddingBottom = "1.5rem";
    style.paddingBottom = "1.5rem";
    
  }

  if (variant === "secondary") {
    style.colour= "#fff" ,
    style.backgroundColor = "#6c757d";
    style.paddingBottom = "0.7rem";
    style.paddingBottom = "0.7rem";
    
  }

  if (variant === "success") {
    style.colour= "#fff" ,
    style.backgroundColor = "#198754";
    style.paddingBottom = "1.5rem";
    style.paddingBottom = "1.5rem";
  }

  if (variant === "warning") {
    style.colour= "#000" ,
    style.backgroundColor = "#ffc107";
    style.paddingBottom = "1.5rem";
    style.paddingBottom = "1.5rem";
  }

  return (
    <button className='button' style={style} {...rest}>
    {children}
  </button>);
}
