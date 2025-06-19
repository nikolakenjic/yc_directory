import SearchForm from "@/components/SearchForm";

export default async function Home({searchParams}: { searchParams: Promise<{ query?: string }> }) {
    const query = (await searchParams).query;

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
        </>
    );
}
