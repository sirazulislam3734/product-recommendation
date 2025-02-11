import { Fade } from 'react-awesome-reveal';
import { FaStar, FaTag, FaTruck } from 'react-icons/fa';

const ExtraSection3 = () => {
    return (
        <section className="featured-products dark:bg-gray-800 dark:text-white py-12 text-center">
            <Fade direction='up'>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Products</h2>
            </Fade>
            <Fade direction='up'>
            <div className="flex dark:bg-gray-800 dark:text-white flex-col md:flex-row flex-wrap justify-center gap-6 px-4">
                <div className="product dark:bg-gray-600 dark:text-white bg-white p-6 rounded-lg shadow-md w-full sm:w-80 md:w-72 lg:w-[370px] transition-transform hover:-translate-y-2">
                    <div className="text-5xl text-yellow-500 mx-auto mb-3">
                        <FaStar />
                    </div>
                    <h3 className="text-xl font-semibold">Top Rated</h3>
                    <p className="text-gray-600 dark:text-white">Check out the best-rated products based on customer reviews.</p>
                </div>
                <div className="product dark:bg-gray-600 dark:text-white bg-white p-6 rounded-lg shadow-md w-full sm:w-80 md:w-72 lg:w-[370px] transition-transform hover:-translate-y-2">
                    <div className="text-5xl mx-auto text-red-500 mb-3">
                        <FaTag />
                    </div>
                    <h3 className="text-xl font-semibold">Best Deals</h3>
                    <p className="text-gray-600 dark:text-white">Grab the hottest discounts and limited-time offers.</p>
                </div>
                <div className="product dark:bg-gray-600 dark:text-white bg-white p-6 rounded-lg shadow-md w-full sm:w-80 md:w-72 lg:w-[370px] transition-transform hover:-translate-y-2">
                    <div className="text-5xl mx-auto text-blue-500 mb-3">
                        <FaTruck />
                    </div>
                    <h3 className="text-xl font-semibold">Fast Delivery</h3>
                    <p className="text-gray-600 dark:text-white">Enjoy quick and hassle-free delivery on top products.</p>
                </div>
            </div>
            </Fade>
        </section>
    );
};

export default ExtraSection3;