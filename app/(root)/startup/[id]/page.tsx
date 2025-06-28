import React from 'react';

const Page = async({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params

    console.log(id)
    return (
        <div>
            <h1>Startup</h1>
        </div>
    );
};

export default Page;