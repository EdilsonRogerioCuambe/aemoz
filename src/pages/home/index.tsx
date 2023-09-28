import { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker'
import { Card } from '../../components/card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

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

interface SwiperCardProps {
  title: string
  description: string
  image: string
  slug: string
}

export function Home() {
  const [posts, setPosts] = useState<PostCardProps[]>([])
  const [swiperCards, setSwiperCards] = useState<SwiperCardProps[]>([])

  useEffect(() => {
    const data = Array.from({ length: 5 }, () => ({
      title: faker.lorem.words(5),
      description: faker.lorem.words(10),
      image: faker.image.url(),
      slug: faker.lorem.slug(5),
      author: {
        name: faker.person.fullName(),
        image: faker.image.avatar(),
      },
      publishedAt: faker.date.recent(),
    }))

    const swiperData = Array.from({ length: 5 }, () => ({
      title: faker.lorem.words(5),
      description: faker.lorem.words(10),
      image: faker.image.url(),
      slug: faker.lorem.slug(5),
    }))

    setSwiperCards(swiperData)
    setPosts(data)
  }, [])

  return (
    <div className="mx-auto max-w-7xl bg-fixed h-screen">
      <Swiper
        className="mySwiper rounded-lg fixed"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {swiperCards.map((card) => (
          <SwiperSlide key={card.slug}>
            <div className="h-96 bg-fixed bg-cover bg-center mt-24">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover"
              />
              <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-5xl font-bold text-white">{card.title}</h1>
                <p className="text-2xl font-normal text-white">
                  {card.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/** <div style={{ overflowY: 'scroll', maxHeight: 'calc(100vh - 100px)' }}> */}
      <div className="overflow-y-scroll max-h-[calc(100vh-100px)]">
        {posts.map((post) => (
          <Card
            key={post.slug}
            title={post.title}
            description={post.description}
            image={post.image}
            slug={post.slug}
            author={post.author}
            publishedAt={post.publishedAt}
          />
        ))}
      </div>
    </div>
  )
}
