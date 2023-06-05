import {groq} from 'next-sanity';

export const blogQuery = groq`
	*[_type == 'blog' && slug.current == $slug][0] {
		...,
		author-> {name, title, phone, email, image}
	}
`;

export const blogsQuery = groq`
	*[_type == 'blog' && defined(slug.current)] | order(_createdAt desc)[0...$limit]
`;

export const allBlogSlug = groq`
	*[_type == 'blog' && defined(slug.current)][].slug.current
`;
