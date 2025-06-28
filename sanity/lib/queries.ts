import {defineQuery} from 'next-sanity'

export const STARTUPS_QUERY = defineQuery(`
*[_type == 'startup' && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] |  order(_createdAt desc) {
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

export const STARTUP_QUERY_DETAILS_BY_ID = defineQuery(`
*[_type == 'startup' && _id == $id][0] {
  _id,
  slug,
  title,
  image,
  category,
  description,
  author -> {
    _id, name, username, image, bio, slug
  }, 
  views,
  _createdAt,
    pitch
}`)