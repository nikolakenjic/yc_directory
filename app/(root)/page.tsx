import SearchForm from "@/components/SearchForm";
import React from "react";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import {STARTUPS_QUERY} from "@/sanity/lib/queries";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";

export default async function Home({searchParams}: { searchParams: Promise<{ query?: string }> }) {
    const query = (await searchParams).query;
    const params = {search: query || null}

    const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params})

    return (
        <>
            <section className='pink_container pattern'>
                <h1 className="heading">
                    Pitch your startup,<br/>
                    Connect with entrepreneurs
                </h1>

                <p className='!max-w-3xl sub-heading'>Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
                    Competitions</p>

                <SearchForm query={query}/>
            </section>

            <section className='section_container'>
                <p className='text-30-semibold'>
                    {query ? `Search results for ${query}` : 'All Startups'}
                </p>

                <ul className='card_grid'>
                    {posts?.length > 0 ? (
                        posts.map((post: StartupTypeCard) => (
                            <StartupCard key={post?._id} post={post}/>
                        ))
                    ) : (
                        <p className='no-results'>No sturtup found</p>
                    )}
                </ul>
            </section>

            <SanityLive/>
        </>
    );
}

// const posts = [
//     {
//         _id: 1,
//         _createdAt: new Date(),
//         views: 55,
//         author: {_id: 1, name: 'Nikola'},
//         description: 'This is description',
//         image: 'https://images.unsplash.com/photo-1626100582867-5fd7df1aeb01?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         category: "Robots",
//         title: 'We are robots'
//     },
//     {
//         _id: 2,
//         _createdAt: new Date(),
//         views: 55,
//         author: {_id: 1, name: 'Nikola'},
//         description: 'This is description',
//         image: 'https://images.unsplash.com/photo-1626100582867-5fd7df1aeb01?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         category: "Robots",
//         title: 'We are robots'
//     },
// ]