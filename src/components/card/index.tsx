import { format } from 'date-fns'

interface PostCardProps {
  title: string
  description: string
  image: string
  slug: string
  author: {
    name: string
    image: string
  }
  publishedAt: Date
}

export function Card({
  title,
  description,
  image,
  author,
  publishedAt,
}: PostCardProps) {
  return (
    <div className="flex shadow-lg rounded-lg mx-4 md:mx-8 my-4 md:my-8 first:mt-24">
      <div className="flex-none md:flex-1 lg:flex-initial mx-auto md:mx-0 rounded-t-lg md:rounded-t-none md:rounded-l-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full md:h-auto md:w-auto max-h-48"
        />
      </div>
      <div className="w-full flex flex-col justify-between p-4 md:p-6">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-base mb-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm">{author.name}</span>
          <span className="text-sm">
            {format(new Date(publishedAt), 'dd/MM/yyyy')}
          </span>
        </div>
      </div>
    </div>
  )
}
