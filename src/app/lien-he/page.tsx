'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
                {/* Background */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/images/contact-hero.jpg")',
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
                            Liên Hệ Với Chúng Tôi
                        </h1>
                        <p className="text-xl text-white mb-8">
                            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Contact Section */}
            <Section bgColor="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Thông Tin Liên Hệ</h2>
                        <p className="text-gray-600 mb-8">
                            Nếu bạn quan tâm đến sản phẩm của chúng tôi hoặc muốn tìm hiểu thêm về trang trại,
                            vui lòng liên hệ với chúng tôi qua form bên cạnh hoặc thông tin dưới đây:
                        </p>

                        <div className="space-y-6 mb-8">
                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">Điện Thoại</h3>
                                    <p className="text-gray-600">0989205010</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">Địa Chỉ</h3>
                                    <p className="text-gray-600">Thôn 1, Vinh Thanh, Phú Vang, Huế</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">Email</h3>
                                    <p className="text-gray-600">info@trangtrai.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                                    <FaClock />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">Giờ Làm Việc</h3>
                                    <p className="text-gray-600">Thứ Hai - Thứ Bảy: 8:00 - 17:00</p>
                                    <p className="text-gray-600">Chủ Nhật: 8:00 - 12:00</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15335.372122289246!2d107.6855!3d16.5855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a1a405c7f0c5%3A0x6c9f3e77e04e3e3b!2sVinh%20Thanh%2C%20Ph%C3%BA%20Vang%2C%20Thua%20Thien%20Hue%2C%20Vietnam!5e0!3m2!1sen!2s!4v1647834567890!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </Section>

            {/* FAQ Section */}
            <Section bgColor="bg-gray-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Câu Hỏi Thường Gặp</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Một số câu hỏi thường gặp về trang trại và sản phẩm của chúng tôi
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="space-y-6">
                        <motion.div
                            className="bg-white p-6 rounded-xl shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Trang trại có bán lẻ sản phẩm không?</h3>
                            <p className="text-gray-600">
                                Có, chúng tôi có bán lẻ các sản phẩm như thịt vịt, trứng vịt và các sản phẩm chế biến từ vịt.
                                Bạn có thể đến trực tiếp trang trại hoặc đặt hàng qua điện thoại.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-xl shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Trang trại có nhận tham quan không?</h3>
                            <p className="text-gray-600">
                                Có, chúng tôi có tổ chức các chương trình tham quan trang trại cho các đoàn khách,
                                đặc biệt là các đoàn học sinh, sinh viên quan tâm đến mô hình nông nghiệp bền vững.
                                Vui lòng liên hệ trước để đặt lịch.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-xl shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Trang trại có bán ấu trùng ruồi lính đen không?</h3>
                            <p className="text-gray-600">
                                Có, chúng tôi có bán ấu trùng ruồi lính đen tươi sống hoặc đã chế biến (sấy khô, nghiền bột)
                                làm thức ăn cho vật nuôi như gà, vịt, cá, ếch... Vui lòng liên hệ để biết thêm chi tiết.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-xl shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Trang trại có giao hàng tận nơi không?</h3>
                            <p className="text-gray-600">
                                Có, chúng tôi có dịch vụ giao hàng tận nơi trong khu vực Huế và các vùng lân cận.
                                Đối với các đơn hàng lớn hoặc giao đến các tỉnh xa hơn, vui lòng liên hệ trước để được tư vấn.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </Section>
        </>
    );
} 