import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-4'>
            <h3>1. What is Context Api?</h3>
            <p>The React Context API is a system for a React app to effectively produce global variables that can be passed to any components. This is the alternative to prop drilling or moving props from grandparent to child to parent and so on. It returns a consumer and a provider. Provider is a component which provides the state or data to its children. It will be the parent of all the components that might need that data or state. Consumer is a component that consumes and uses the state.

            </p>

        </div>
    );
};

export default Blogs;