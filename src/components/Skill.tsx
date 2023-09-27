import Image from "next/image"

interface Props {
  name: string,
  image: string
}

function Skill({ name, image }: Props) {
  return (
    <div className="border-2 border-red-500 text-center rounded-lg p-3 shine space-y-5 flex flex-col justify-center items-center">
      <Image src={image} alt={name} width={100} height={100} />
      <h5>{name}</h5>
    </div>

  )
}

export default Skill