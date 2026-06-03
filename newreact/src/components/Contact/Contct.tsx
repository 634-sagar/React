import { ContactInfo } from "../../constant/Contact"

const Contact = () => {
    return (
      <>
      <span id="contact"></span>
        <div className="dark:bg-black dark:text-white py-14 lg:py-16">
            <div className="container">
                <div className="text-center mb-10">
                    <span className="section-btn">Get In Touch</span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-7">Contact <span className="text-primary">Us</span></h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 ">

                    <div className=" lg:col-span-2 space-y-4  lg:space-y-6">
                        <p>Have questions about our products? We're here to help!</p>
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
                            {ContactInfo.map((item) => (
                                <div key={item.id} className="dark:bg-gray-900 flex items-center gap-3 lg:gap-4 lg:p-4
                                rounded-xl lg:rounded-2xl">
                                    <div className="h-10 w-10 lg:h-14 lg:w-14 bg-primary flex items-center justify-center
                                    rounded-xl lg:rounded-2xl hover:scale-110 duration-500">
                                        <item.icon />
                                    </div>
                                    <div>
                                        <p className="font-bold text-xs lg:text-base">{item.title}</p>
                                        <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-base">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>





                    <div className="lg:col-span-3">
                        <div className="bg-gray-50 dark:bg-gray-900 p-5 lg:p-8 rounded-lg lg:rounded-2xl">
                            <h3 className="text-xl lg:text-2xl font-bold dark:text-white">Send us a <span className="text-primary">Message</span></h3>

                            <form action="" className="space-y-4 lg:space-y-5">
                                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
                                    <input type="text" placeholder="your name" className="w-full px-4 py-3 lg:p-4 border-2 dark:border-gray-800 dark:text-white
                                    rounded-lg lg:rounded-2xl focus:outline-none focus:border-primary duration-300" />
                                    <input type="email" placeholder="your email" className="w-full px-4 py-3 lg:p-4 border-2 dark:border-gray-800 dark:text-white
                                    rounded-lg lg:rounded-2xl focus:outline-none focus:border-primary duration-300" />
                                </div>
                                <input type="text" placeholder="your subject" className="w-full px-4 py-3 lg:p-4 border-2 dark:border-gray-800 dark:text-white
                                    rounded-lg lg:rounded-2xl focus:outline-none focus:border-primary duration-300" />
                                <textarea name="" id="" placeholder="your message" className="w-full px-4 py-3 lg:p-4 border-2 dark:border-gray-800 dark:text-white
                                    rounded-lg lg:rounded-2xl focus:outline-none focus:border-primary duration-300 resize-none" ></textarea>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}

export default Contact