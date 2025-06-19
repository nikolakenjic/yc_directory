import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <>
            <section className='pink_container pattern'>
                <h1 className="heading">
                    Hello world!
                </h1>
                <Button className='mt-5' variant='outline'>Click me</Button>
            </section>
        </>
    );
}
