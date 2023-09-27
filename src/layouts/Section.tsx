interface Props {
    id?: string;
    children: React.ReactNode;
    className?: string
}
export default function Section({ children, className, id }: Props) {
  return (
    <section id={id} className={`px-2 sm:px-3 md:px-4 lg:px-32 py-52 ${className}`}>{ children }</section>
  )
}

