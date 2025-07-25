function Skills() {
  return (
    <section className="bg-light-gray dark:bg-dark-gray">
      {/* Container */}
      <div
        className="max-w-screen-lg flex flex-col mx-auto px-8 pt-10 pb-32
       space-y-20"
      >
        {/* Header */}
        <h2 className="text-2xl font-semibold md:text-4xl">
          My skills and the tools I use
        </h2>
        {/* Skills container  */}
        <div
          data-aos="fade-up"
          className="w-full flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10"
        >
          {/* Skills subcontainer 1 */}
          <div className="flex flex-col space-y-10 md:w-1/2">
            {/* Next */}
            <div
              data-aos="fade-up"
              className="relative flex flex-wrap bg-white  border-2 border-black rounded-xl dark:bg-black dark:border-white  p-6"
            >
              {/* name */}
              <h4 className="absolute left-4 -top-4 px-2 bg-opacity-100 text-xl font-bold tracking-widest text-white bg-black  rounded-2xl dark:text-black dark:bg-white">
                Next
              </h4>
              {/* Item 1 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                App Router
              </div>
              {/* item 2 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Server Components
              </div>
              {/* item 3 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Pages Router
              </div>
              {/* item 4 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Server Components
              </div>
              {/* item 5 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                API Routes
              </div>
              {/* item 6 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Middlewares
              </div>
              {/* item 7 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                SSR
              </div>
              {/* item 8 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                SSG
              </div>
              {/* item 9 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                ISR
              </div>
              {/* item 10 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Dynamic Routes
              </div>
              {/* item 11 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Layouts
              </div>
              {/* item 12 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Metadata
              </div>
              {/* item 13 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Image Opt
              </div>
              {/* item 14 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Font Opt
              </div>
              {/* item 15 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Authentication
              </div>
              {/* item 16 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Error Handling
              </div>
            </div>
            {/* React */}
            <div
              data-aos="fade-up"
              className="relative flex flex-wrap bg-white  border-2 border-black rounded-xl dark:bg-black dark:border-white  p-6"
            >
              {/* name */}
              <h4 className="absolute left-4 -top-4 px-2 bg-opacity-100 text-xl font-bold tracking-widest text-white bg-black  rounded-2xl dark:text-black dark:bg-white">
                React
              </h4>
              {/* Item 1 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                JSX
              </div>
              {/* item 2 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Components
              </div>
              {/* item 3 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Props & States
              </div>
              {/* item 4 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Lifecycle methods
              </div>
              {/* item 5 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Routing
              </div>
              {/* item 6 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Forms
              </div>
              {/* item 7 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Testing
              </div>
              {/* item 8 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Hooks
              </div>
              {/* item 9 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                State managment
              </div>
              {/* item 10 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Context api
              </div>
              {/* item 11 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Redux
              </div>
            </div>
            {/* Git */}
            <div
              data-aos="fade-up"
              className="relative flex flex-wrap bg-white  border-2 border-black rounded-xl dark:bg-black dark:border-white  p-6"
            >
              {/* name */}
              <h4 className="absolute left-4 -top-4 px-2 bg-opacity-100 text-xl font-bold tracking-widest text-white bg-black  rounded-2xl dark:text-black dark:bg-white">
                Git
              </h4>
              {/* Item 1 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Clone
              </div>
              {/* item 2 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Add
              </div>
              {/* item 3 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Commit
              </div>
              {/* item 4 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Push & Pull
              </div>
              {/* item 5 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Branch
              </div>
              {/* item 6 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Merge
              </div>
              {/* item 7 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Diff
              </div>
              {/* item 8 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Collabration
              </div>
            </div>
            {/* CSS framework */}
            <div
              data-aos="fade-up"
              className="relative flex flex-wrap bg-white  border-2 border-black rounded-xl dark:bg-black dark:border-white  p-6"
            >
              {/* name */}
              <h4 className="absolute left-4 -top-4 px-2 bg-opacity-100 text-xl font-bold tracking-widest text-white bg-black  rounded-2xl dark:text-black dark:bg-white">
                CSS Frameworks
              </h4>
              {/* Item 1 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Tailwind CSS
              </div>
              {/* item 2 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                SASS
              </div>
              {/* item 3 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Material UI
              </div>
              {/* item 4 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Ant design
              </div>
              {/* item 5 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Bootstrap
              </div>
            </div>
          </div>
          {/* Skills subcontainer 1 */}
          <div className="flex flex-col space-y-10 md:w-1/2">
            {/* JS */}
            <div
              data-aos="fade-up"
              className="relative flex flex-wrap bg-white  border-2 border-black rounded-xl dark:bg-black dark:border-white p-6"
            >
              {/* name */}
              <h4 className="absolute left-4 -top-4 px-2 bg-opacity-100 text-xl font-bold tracking-widest text-white bg-black  rounded-2xl dark:text-black dark:bg-white">
                Javascript
              </h4>
              {/* Item 1 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                JS fundamentals
              </div>
              {/* Item 2 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Variables & Data type
              </div>
              {/* Item 3 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Hoisting
              </div>
              {/* Item 4 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Operators & Expressions
              </div>
              {/* Item 5 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Control flow
              </div>
              {/* Item 6 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Functions
              </div>
              {/* Item 7 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Prototype
              </div>
              {/* Item 8 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Closure
              </div>
              {/* Item 9 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                HOF
              </div>
              {/* Item 10 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Arrays & Objects
              </div>
              {/* Item 11 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                DOM manipulation
              </div>
              {/* Item 12 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                RegEx
              </div>
              {/* Item 13 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Events
              </div>
              {/* Item 14 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                JSON & AJAX
              </div>
              {/* Item 15 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                REST api
              </div>
              {/* Item 14 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Async JS
              </div>
              {/* Item 14 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                ES6+ features
              </div>
            </div>
            {/* HTML */}
            <div
              data-aos="fade-up"
              className="relative flex flex-wrap bg-white  border-2 border-black rounded-xl dark:bg-black dark:border-white  p-6"
            >
              {/* name */}
              <h4 className="absolute left-4 -top-4 px-2 bg-opacity-100 text-xl font-bold tracking-widest text-white bg-black  rounded-2xl dark:text-black dark:bg-white">
                HTML
              </h4>
              {/* Item 1 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                HTML 5
              </div>
              {/* item 2 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Image handling
              </div>
              {/* item 3 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                SEO basics
              </div>
              {/* item 4 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Responsive design
              </div>
              {/* item 5 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Form & Table creation
              </div>
            </div>
            {/* CSS */}
            <div
              data-aos="fade-up"
              className="relative flex flex-wrap bg-white  border-2 border-black rounded-xl dark:bg-black dark:border-white  p-6"
            >
              {/* name */}
              <h4 className="absolute left-4 -top-4 px-2 bg-opacity-100 text-xl font-bold tracking-widest text-white bg-black  rounded-2xl dark:text-black dark:bg-white">
                CSS
              </h4>
              {/* Item 1 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Selectors
              </div>
              {/* item 2 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Typography
              </div>
              {/* item 3 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Layout
              </div>
              {/* item 4 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Colors
              </div>
              {/* item 5 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Units
              </div>
              {/* item 6 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                positioning
              </div>
              {/* item 7 */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Flexbox
              </div>
              {/* item 8  */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Grid
              </div>
              {/* item 9  */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Transitions
              </div>
              {/* item 10  */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Animations
              </div>
              {/* item 11  */}
              <div className="p-3 mb-3 mr-3 bg-light-gray text-black dark:bg-dark-gray dark:text-white rounded-xl">
                Media Queries
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
