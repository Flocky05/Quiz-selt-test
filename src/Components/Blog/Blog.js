import React from 'react';

const Blog = () => {
    return (
        <div className='text-left m-8 p-10'>
            <h2 className="text-2xl font-semibold">
                What is the perpose of react router?
            </h2>
            <p className='text-xl'>
                What are the main features of React Router?
                At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different Route s as it changes, and it also gives you tools to update the location using  Links and the history API.

                BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.
                Routes: It’s a new component introduced in the v6 and a upgrade of the component. The main advantages of Routes over Switch are:
                Relative s and s
                Routes are chosen based on the best match instead of being traversed in order.
                Route: Route is the conditionally shown component that renders some UI when its path matches the current URL.
                Link: Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.
            </p>

            <h2 className="text-2xl font-semibold">
                How does context API works?
            </h2>
            <p className='text-xl'>
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
            </p>
            <h2 className="text-2xl font-semibold">
                Use of Useref
            </h2>
            <p className='text-xl'>
                The useRef Hook allows you to persist values between renders.

                It can be used to store a mutable value that does not cause a re-render when updated.

                It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
            </p>

        </div>
    );
};

export default Blog;