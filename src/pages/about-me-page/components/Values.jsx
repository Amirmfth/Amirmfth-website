import { faAward, faBolt, faBullseye, faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Values() {
  return (
    <section className="bg-light-gray dark:bg-dark-gray">
        {/* Values container */}
        <div className="max-w-screen-lg flex flex-col items-start mx-auto px-4 space-y-12 py-20">
            {/* Header */}
            <h2 className="text-2xl md:text-5xl">Take a look at my values</h2>
            {/* Values container */}
            <div className="w-full flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
                {/* Value 1 */}
                <div data-aos="fade-up" className="flex flex-col space-y-8 p-6 rounded-xl bg-white md:w-1/4 dark:bg-black">
                    {/* Icon */}
                    <div className="w-14 h-14  flex py-4 px-5 items-center justify-center border-2 border-gray-300 rounded-full text-black bg-light-gray dark:bg-dark-gray dark:text-white">
                        <FontAwesomeIcon size="xl" icon={faAward}/>
                    </div>
                    {/* Text */}
                    <h2 className="text-2xl">Focus on super high-quality</h2>
                </div>
                {/* Value 2 */}
                <div data-aos="fade-up" className="flex flex-col space-y-8 p-6 rounded-xl bg-white md:w-1/4 dark:bg-black">
                    {/* Icon */}
                    <div className="w-14 h-14  flex py-4 px-5 items-center justify-center border-2 border-gray-300 rounded-full text-black bg-light-gray dark:bg-dark-gray dark:text-white">
                        <FontAwesomeIcon size="xl" icon={faBolt}/>
                    </div>
                    {/* Text */}
                    <h2 className="text-2xl">Super fast delivery work</h2>
                </div>
                {/* Value 3 */}
                <div data-aos="fade-up" className="flex flex-col space-y-8 p-6 rounded-xl bg-white md:w-1/4 dark:bg-black">
                    {/* Icon */}
                    <div className="w-14 h-14  flex py-4 px-5 items-center justify-center border-2 border-gray-300 rounded-full text-black bg-light-gray dark:bg-dark-gray dark:text-white">
                        <FontAwesomeIcon size="xl" icon={faBullseye}/>
                    </div>
                    {/* Text */}
                    <h2 className="text-2xl">Error-Free Work, Always</h2>
                </div>
                {/* Value 4 */}
                <div data-aos="fade-up" className="flex flex-col space-y-8 p-6 rounded-xl bg-white md:w-1/4 dark:bg-black">
                    {/* Icon */}
                    <div className="w-14 h-14 flex py-4 px-5 items-center justify-center border-2 border-gray-300 rounded-full text-black bg-light-gray dark:bg-dark-gray dark:text-white">
                        <FontAwesomeIcon size="xl" icon={faPeopleGroup}/>
                    </div>
                    {/* Text */}
                    <h2 className="text-2xl">Your Team, Our Team</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values
