'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { FaLeaf, FaHandshake, FaUsers, FaMedal } from 'react-icons/fa';

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
                {/* Background */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("/images/about-hero.jpg")',
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
                            Về Chúng Tôi
                        </h1>
                        <p className="text-xl text-white mb-8">
                            Trang trại nuôi ruồi lính đen và vịt tại Huế - Mô hình nông nghiệp bền vững
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Story Section */}
            <Section bgColor="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Câu Chuyện Của Chúng Tôi</h2>
                        <p className="text-gray-600 mb-4">
                            Trang trại của chúng tôi được thành lập vào năm 2020, với mục tiêu xây dựng một mô hình
                            nông nghiệp bền vững, thân thiện với môi trường và mang lại giá trị kinh tế cao.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Chúng tôi bắt đầu với việc nghiên cứu và phát triển kỹ thuật nuôi ruồi lính đen,
                            một loài côn trùng có khả năng phân hủy chất thải hữu cơ và chuyển hóa thành protein
                            chất lượng cao. Sau đó, chúng tôi mở rộng mô hình với việc nuôi vịt, sử dụng ấu trùng
                            ruồi lính đen làm thức ăn, tạo nên một chu trình sản xuất khép kín.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Hiện nay, trang trại của chúng tôi đã trở thành một điểm đến tham quan, học tập
                            về mô hình nông nghiệp bền vững cho nhiều đoàn khách, đặc biệt là các đoàn học sinh,
                            sinh viên quan tâm đến nông nghiệp và môi trường.
                        </p>
                    </motion.div>
                    <motion.div
                        className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src="/images/farm-story.jpg"
                            alt="Câu chuyện trang trại"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </Section>

            {/* Values Section */}
            <Section bgColor="bg-gray-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Giá Trị Cốt Lõi</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Những giá trị định hướng mọi hoạt động của trang trại chúng tôi
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
                            <FaLeaf size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Bền Vững</h3>
                        <p className="text-gray-600">
                            Chúng tôi cam kết xây dựng một mô hình nông nghiệp bền vững,
                            thân thiện với môi trường và có thể duy trì lâu dài.
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
                            <FaMedal size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Chất Lượng</h3>
                        <p className="text-gray-600">
                            Chúng tôi luôn đặt chất lượng sản phẩm lên hàng đầu,
                            đảm bảo cung cấp những sản phẩm tốt nhất cho khách hàng.
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
                            <FaHandshake size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Trách Nhiệm</h3>
                        <p className="text-gray-600">
                            Chúng tôi có trách nhiệm với khách hàng, cộng đồng và môi trường,
                            luôn hoạt động với tinh thần trách nhiệm cao nhất.
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
                            <FaUsers size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Cộng Đồng</h3>
                        <p className="text-gray-600">
                            Chúng tôi luôn hướng đến việc xây dựng một cộng đồng nông nghiệp bền vững,
                            chia sẻ kiến thức và kinh nghiệm với mọi người.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Team Section */}
            <Section bgColor="bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Đội Ngũ Của Chúng Tôi</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Những con người tâm huyết đã xây dựng và phát triển trang trại
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
                        <div className="relative h-80">
                            <Image
                                src="/images/team-1.jpg"
                                alt="Người sáng lập"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Nguyễn Văn A</h3>
                            <p className="text-green-600 font-medium mb-4">Người Sáng Lập & Giám Đốc</p>
                            <p className="text-gray-600">
                                Với hơn 10 năm kinh nghiệm trong lĩnh vực nông nghiệp, anh A đã sáng lập và phát triển
                                trang trại với mong muốn xây dựng một mô hình nông nghiệp bền vững tại Việt Nam.
                            </p>
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
                        <div className="relative h-80">
                            <Image
                                src="/images/team-2.jpg"
                                alt="Quản lý sản xuất"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Trần Thị B</h3>
                            <p className="text-green-600 font-medium mb-4">Quản Lý Sản Xuất</p>
                            <p className="text-gray-600">
                                Chị B phụ trách quản lý quy trình sản xuất tại trang trại, đảm bảo mọi hoạt động
                                diễn ra đúng quy trình, đạt hiệu quả cao và đảm bảo chất lượng sản phẩm.
                            </p>
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
                        <div className="relative h-80">
                            <Image
                                src="/images/team-3.jpg"
                                alt="Chuyên gia kỹ thuật"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Lê Văn C</h3>
                            <p className="text-green-600 font-medium mb-4">Chuyên Gia Kỹ Thuật</p>
                            <p className="text-gray-600">
                                Anh C là chuyên gia về kỹ thuật nuôi ruồi lính đen và vịt,
                                luôn nghiên cứu và áp dụng những phương pháp mới nhất để nâng cao hiệu quả sản xuất.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Achievements Section */}
            <Section bgColor="bg-green-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Thành Tựu</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Những thành tựu đáng tự hào mà chúng tôi đã đạt được
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Giải thưởng Nông nghiệp Xanh 2022</h3>
                        <p className="text-gray-600">
                            Trang trại của chúng tôi đã vinh dự nhận được giải thưởng Nông nghiệp Xanh năm 2022,
                            ghi nhận những đóng góp trong việc phát triển mô hình nông nghiệp bền vững,
                            thân thiện với môi trường.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Chứng nhận Sản phẩm OCOP 4 sao</h3>
                        <p className="text-gray-600">
                            Sản phẩm trứng vịt của trang trại đã được chứng nhận là sản phẩm OCOP 4 sao của tỉnh Thừa Thiên Huế,
                            khẳng định chất lượng và giá trị của sản phẩm.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Mô hình điểm về nông nghiệp tuần hoàn</h3>
                        <p className="text-gray-600">
                            Trang trại của chúng tôi đã được Sở Nông nghiệp và Phát triển Nông thôn tỉnh Thừa Thiên Huế
                            công nhận là mô hình điểm về nông nghiệp tuần hoàn, là địa điểm tham quan, học tập
                            cho nhiều đoàn khách trong và ngoài tỉnh.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Hợp tác với các trường đại học</h3>
                        <p className="text-gray-600">
                            Chúng tôi đã ký kết hợp tác với nhiều trường đại học, viện nghiên cứu trong việc
                            nghiên cứu và phát triển các kỹ thuật nuôi ruồi lính đen và vịt,
                            đồng thời là nơi thực tập cho sinh viên ngành nông nghiệp.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section bgColor="bg-green-600">
                <div className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Tham Quan Trang Trại</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Bạn muốn tìm hiểu thêm về mô hình trang trại của chúng tôi?
                        Hãy đăng ký tham quan ngay hôm nay!
                    </p>
                    <Button href="/lien-he" variant="secondary" className="text-lg px-8 py-4">
                        Đăng Ký Tham Quan
                    </Button>
                </div>
            </Section>
        </>
    );
} 