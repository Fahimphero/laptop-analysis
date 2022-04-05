import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-4'>
            <h3>1. What is Context Api?</h3>
            <p>The React Context API is a system for a React app to effectively produce global variables that can be passed to any components. This is the alternative to prop drilling or moving props from grandparent to child to parent and so on. It returns a consumer and a provider. Provider is a component which provides the state or data to its children. It will be the parent of all the components that might need that data or state. Consumer is a component that consumes and uses the state.

            </p>
            <h3>2. What is Semantic tag?</h3>
            <p>Semantic tag means meaningful tag. Semantic tag tells us the type of content inside it.By adding semantic HTML tags to pages, we provide additional information that helps Google and Bing understand the roles and relative importance of the different parts of our page.If we can successfully communicate to Google and Bing which part of the page is the header, which is the footer, and which is for navigation, they will thank us. HTML5 introduces many semantic elements as mentioned below which make the code easier to write and understand for the developer as well as instructs the browser on how to treat them. For Example: </p>
            <ul>
                <li>article</li>
                <li>header</li>
                <li>section</li>
                <li>aside</li>
                <li>nav e.t.c.</li>
            </ul>
        </div>
    );
};

export default Blogs;