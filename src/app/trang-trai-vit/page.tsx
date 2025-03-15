'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { FaFeather, FaLeaf, FaEgg, FaShieldAlt } from 'react-icons/fa';

export default function DuckFarmPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
                {/* Background */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/images/duck-hero.jpg")',
                        filter: 'brightness(0.7)'
                    }}
                />

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Trang Trại Vịt
                        </h1>
                        <p className="text-xl text-white mb-8">
                            Vịt được nuôi trong môi trường tự nhiên, với thức ăn sạch từ ấu trùng ruồi lính đen
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Introduction Section */}
            <Section bgColor="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Trang Trại Vịt Của Chúng Tôi</h2>
                        <p className="text-gray-600 mb-4">
                            Trang trại vịt của chúng tôi tọa lạc tại Thôn 1, Vinh Thanh, Phú Vang, Huế,
                            là một mô hình chăn nuôi kết hợp với việc nuôi ruồi lính đen, tạo nên một hệ sinh thái
                            nông nghiệp bền vững và thân thiện với môi trường.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Vịt được nuôi trong môi trường tự nhiên, thoáng mát, có không gian rộng rãi để vận động,
                            và được cho ăn thức ăn tự nhiên, bao gồm ấu trùng ruồi lính đen giàu protein.
                        </p>
                        <div className="flex items-center text-green-600 font-medium">
                            <FaFeather className="mr-2" />
                            <span>Vịt khỏe mạnh, thịt thơm ngon, trứng chất lượng cao</span>
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src="/images/duck-farm.jpg"
                            alt="Trang trại vịt"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </Section>

            {/* Benefits Section */}
            <Section bgColor="bg-amber-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Lợi Ích Của Vịt Thả Vườn</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Vịt được nuôi theo phương pháp thả vườn, kết hợp với thức ăn từ ấu trùng ruồi lính đen
                        mang lại nhiều lợi ích cho sức khỏe và môi trường
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <div className="text-amber-500 mb-4">
                            <FaFeather size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Thịt Vịt Thơm Ngon</h3>
                        <p className="text-gray-600">
                            Vịt được nuôi trong môi trường tự nhiên, vận động nhiều, thịt săn chắc,
                            thơm ngon và ít mỡ hơn so với vịt nuôi công nghiệp.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <div className="text-amber-500 mb-4">
                            <FaEgg size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Trứng Chất Lượng Cao</h3>
                        <p className="text-gray-600">
                            Trứng vịt từ trang trại của chúng tôi có lòng đỏ đậm màu, giàu dinh dưỡng
                            và có hương vị thơm ngon tự nhiên.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <div className="text-amber-500 mb-4">
                            <FaShieldAlt size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">An Toàn Thực Phẩm</h3>
                        <p className="text-gray-600">
                            Vịt được nuôi không sử dụng kháng sinh, thuốc tăng trưởng,
                            đảm bảo an toàn cho sức khỏe người tiêu dùng.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        <div className="text-amber-500 mb-4">
                            <FaLeaf size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Thân Thiện Môi Trường</h3>
                        <p className="text-gray-600">
                            Mô hình nuôi vịt kết hợp với ruồi lính đen tạo ra một chu trình sản xuất khép kín,
                            giảm thiểu ô nhiễm môi trường.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Products Section */}
            <Section bgColor="bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Sản Phẩm Từ Trang Trại Vịt</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Chúng tôi cung cấp các sản phẩm chất lượng cao từ trang trại vịt
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <div className="relative h-60">
                            <Image
                                src="/images/duck-meat.jpg"
                                alt="Thịt vịt"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Thịt Vịt Tươi</h3>
                            <p className="text-gray-600 mb-4">
                                Thịt vịt tươi ngon, được giết mổ và đóng gói theo quy trình vệ sinh an toàn thực phẩm.
                            </p>
                            <Button href="/lien-he" variant="outline" className="w-full">
                                Đặt Hàng
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <div className="relative h-60">
                            <Image
                                src="/images/duck-eggs.jpg"
                                alt="Trứng vịt"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Trứng Vịt Sạch</h3>
                            <p className="text-gray-600 mb-4">
                                Trứng vịt tươi, sạch, giàu dinh dưỡng, được thu gom và đóng gói hàng ngày.
                            </p>
                            <Button href="/lien-he" variant="outline" className="w-full">
                                Đặt Hàng
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <div className="relative h-60">
                            <Image
                                src="/images/duck-processed.jpg"
                                alt="Sản phẩm chế biến từ vịt"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Sản Phẩm Chế Biến</h3>
                            <p className="text-gray-600 mb-4">
                                Các sản phẩm chế biến từ vịt như vịt hun khói, vịt quay, chân vịt ngâm sả tỏi...
                            </p>
                            <Button href="/lien-he" variant="outline" className="w-full">
                                Đặt Hàng
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Testimonials Section */}
            <Section bgColor="bg-gray-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Những đánh giá từ khách hàng đã sử dụng sản phẩm của trang trại
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 font-bold text-xl mr-4">
                                T
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">Trần Văn A</h3>
                                <p className="text-gray-500 text-sm">Khách hàng thường xuyên</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">
                            &ldquo;Thịt vịt từ trang trại rất thơm ngon, không có mùi hôi như vịt thông thường.
                            Gia đình tôi rất thích và thường xuyên mua sản phẩm từ trang trại.&rdquo;
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 font-bold text-xl mr-4">
                                N
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">Nguyễn Thị B</h3>
                                <p className="text-gray-500 text-sm">Chủ nhà hàng</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">
                            &ldquo;Trứng vịt từ trang trại có lòng đỏ đậm màu, rất thích hợp để làm bánh.
                            Khách hàng của nhà hàng tôi rất thích các món ăn được chế biến từ trứng vịt này.&rdquo;
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 font-bold text-xl mr-4">
                                L
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">Lê Văn C</h3>
                                <p className="text-gray-500 text-sm">Khách hàng mới</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">
                            &ldquo;Tôi rất ấn tượng với mô hình trang trại kết hợp giữa nuôi ruồi lính đen và vịt.
                            Đây là một mô hình nông nghiệp bền vững, thân thiện với môi trường mà chúng ta nên ủng hộ.&rdquo;
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section bgColor="bg-amber-500">
                <div className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Muốn Mua Sản Phẩm Từ Trang Trại?</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Liên hệ với chúng tôi để đặt hàng hoặc tìm hiểu thêm về các sản phẩm từ trang trại vịt
                    </p>
                    <Button href="/lien-he" variant="primary" className="text-lg px-8 py-4 bg-white text-amber-500 hover:bg-gray-100">
                        Liên Hệ Ngay
                    </Button>
                </div>
            </Section>
        </>
    );
} 