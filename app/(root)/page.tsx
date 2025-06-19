import {Button} from "@/components/ui/button";
import SearchForm from "@/app/components/SearchForm";

export default function Home() {
    return (
        <>
            <section className='pink_container pattern'>
                <h1 className="heading">
                    Pitch your startup,<br/>
                    Connect with entrepreneurs
                </h1>

                <p className='!max-w-3xl sub-heading'>Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>

                <SearchForm />
            </section>
        </>
    );
}
