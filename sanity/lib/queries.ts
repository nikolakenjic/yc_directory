import {defineQuery} from  'next-sanity'

export const STARTUPS_QUERY = defineQuery(`
*[_type == 'startup' && defined(slug.current)] |  order(_createdAt desc) {
  _id,
  slug,
  title,
  image,
  category,
  description,
  author -> {
    _id, name, image, bio
  }, 
  views,
  _createdAt
}`)