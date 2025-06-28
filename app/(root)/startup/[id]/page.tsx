import React from 'react';
import {client} from '@/sanity/lib/client'
import {STARTUP_QUERY_DETAILS_BY_ID} from "@/sanity/lib/queries";
import {notFound} from "next/navigation";

export const experimental_ppr = true

const Page = async ({params}: { params: Promise<{ id: string }> }) => {
    const {id} = await params
    const post = await client.fetch(STARTUP_QUERY_DETAILS_BY_ID, {id})

    console.log(id)
    if (!post) return notFound()

    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    );
};

export default Page;