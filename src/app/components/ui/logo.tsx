const logoUrl = new URL("../../../assets/Larisha logo 1.svg", import.meta.url).href;

export function Logo({ className, ...props }: React.ComponentProps<"img">) {
  return (
    <img
      src={logoUrl}
      alt="Larisha logo"
      className={`h-10 w-10 ${className ?? ""}`.trim()}
      {...props}
    />
  );
}
