'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { FaBug, FaLeaf, FaRecycle, FaSeedling } from 'react-icons/fa';

export default function BlackSoldierFlyPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
                {/* Background */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/images/bsf-hero.jpg")',
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
                            Ruồi Lính Đen
                        </h1>
                        <p className="text-xl text-white mb-8">
                            Khám phá về loài côn trùng kỳ diệu có khả năng chuyển hóa chất thải thành nguồn protein chất lượng cao
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ruồi Lính Đen Là Gì?</h2>
                        <p className="text-gray-600 mb-4">
                            Ruồi lính đen (Black Soldier Fly - Hermetia illucens) là một loài côn trùng thuộc họ Stratiomyidae,
                            có nguồn gốc từ châu Mỹ nhưng hiện đã phân bố rộng rãi trên toàn thế giới.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Đặc biệt, ấu trùng ruồi lính đen có khả năng phân hủy chất thải hữu cơ nhanh chóng và
                            chuyển hóa thành protein chất lượng cao, là nguồn thức ăn tuyệt vời cho vật nuôi.
                        </p>
                        <div className="flex items-center text-green-600 font-medium">
                            <FaBug className="mr-2" />
                            <span>Giải pháp bền vững cho nông nghiệp hiện đại</span>
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
                            src="/images/bsf-closeup.jpg"
                            alt="Ruồi lính đen"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </Section>

            {/* Benefits Section */}
            <Section bgColor="bg-green-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Lợi Ích Của Ruồi Lính Đen</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Việc nuôi ruồi lính đen mang lại nhiều lợi ích cho môi trường, nông nghiệp và kinh tế
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
                        <div className="text-green-600 mb-4">
                            <FaRecycle size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Xử Lý Chất Thải</h3>
                        <p className="text-gray-600">
                            Ấu trùng ruồi lính đen có thể phân hủy hầu hết các loại chất thải hữu cơ,
                            giúp giảm thiểu ô nhiễm môi trường.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <div className="text-green-600 mb-4">
                            <FaBug size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Nguồn Protein</h3>
                        <p className="text-gray-600">
                            Ấu trùng chứa 40-45% protein, 30-35% chất béo, và nhiều khoáng chất,
                            là nguồn thức ăn giàu dinh dưỡng cho vật nuôi.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <div className="text-green-600 mb-4">
                            <FaLeaf size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Thân Thiện Môi Trường</h3>
                        <p className="text-gray-600">
                            Giảm phát thải khí nhà kính, tiết kiệm nước và đất so với các phương pháp
                            sản xuất protein truyền thống.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        <div className="text-green-600 mb-4">
                            <FaSeedling size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Phân Bón Hữu Cơ</h3>
                        <p className="text-gray-600">
                            Phân của ấu trùng ruồi lính đen là phân bón hữu cơ chất lượng cao,
                            giàu dinh dưỡng cho cây trồng.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Process Section */}
            <Section bgColor="bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Quy Trình Nuôi Ruồi Lính Đen</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Tại trang trại của chúng tôi, ruồi lính đen được nuôi theo quy trình khép kín,
                        đảm bảo hiệu quả và vệ sinh
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 transform -translate-x-1/2"></div>

                    {/* Steps */}
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row items-center">
                            <motion.div
                                className="md:w-1/2 md:pr-12 md:text-right"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Thu Gom Chất Thải Hữu Cơ</h3>
                                <p className="text-gray-600">
                                    Chúng tôi thu gom các loại chất thải hữu cơ từ nhà hàng, chợ, và các nguồn khác
                                    để làm thức ăn cho ấu trùng ruồi lính đen.
                                </p>
                            </motion.div>
                            <div className="mx-4 my-4 md:my-0 flex-shrink-0 bg-green-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold z-10">1</div>
                            <div className="md:w-1/2 md:pl-12"></div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pr-12"></div>
                            <div className="mx-4 my-4 md:my-0 flex-shrink-0 bg-green-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold z-10">2</div>
                            <motion.div
                                className="md:w-1/2 md:pl-12"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Nuôi Ruồi Trưởng Thành</h3>
                                <p className="text-gray-600">
                                    Ruồi trưởng thành được nuôi trong môi trường kiểm soát để đẻ trứng,
                                    mỗi con ruồi cái có thể đẻ 500-900 trứng.
                                </p>
                            </motion.div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center">
                            <motion.div
                                className="md:w-1/2 md:pr-12 md:text-right"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Nuôi Ấu Trùng</h3>
                                <p className="text-gray-600">
                                    Ấu trùng được nuôi bằng chất thải hữu cơ trong khoảng 2 tuần,
                                    trong thời gian này chúng tăng trọng nhanh chóng.
                                </p>
                            </motion.div>
                            <div className="mx-4 my-4 md:my-0 flex-shrink-0 bg-green-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold z-10">3</div>
                            <div className="md:w-1/2 md:pl-12"></div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pr-12"></div>
                            <div className="mx-4 my-4 md:my-0 flex-shrink-0 bg-green-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold z-10">4</div>
                            <motion.div
                                className="md:w-1/2 md:pl-12"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Thu Hoạch và Chế Biến</h3>
                                <p className="text-gray-600">
                                    Ấu trùng được thu hoạch, làm sạch và chế biến thành thức ăn cho vịt
                                    hoặc các loại vật nuôi khác.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section bgColor="bg-green-600">
                <div className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Quan Tâm Đến Ruồi Lính Đen?</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Liên hệ với chúng tôi để được tư vấn và cung cấp thông tin chi tiết về việc nuôi ruồi lính đen
                    </p>
                    <Button href="/lien-he" variant="secondary" className="text-lg px-8 py-4">
                        Liên Hệ Ngay
                    </Button>
                </div>
            </Section>
        </>
    );
} 