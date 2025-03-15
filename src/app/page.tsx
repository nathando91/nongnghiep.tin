'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';
import { FaBug, FaLeaf, FaRecycle, FaSeedling, FaFeather, FaEgg, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Section */}
      <Section id="about" bgColor="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Về Trang Trại Của Chúng Tôi</h2>
            <p className="text-gray-600 mb-4">
              Trang trại của chúng tôi tọa lạc tại Thôn 1, Vinh Thanh, Phú Vang, Huế,
              là một mô hình trang trại kết hợp giữa nuôi ruồi lính đen và vịt,
              tạo nên một hệ sinh thái nông nghiệp bền vững và thân thiện với môi trường.
            </p>
            <p className="text-gray-600 mb-4">
              Chúng tôi áp dụng các phương pháp canh tác hữu cơ, không sử dụng hóa chất độc hại,
              đảm bảo sản phẩm an toàn cho người tiêu dùng và bảo vệ môi trường.
            </p>
            <div className="flex items-center text-green-600 font-medium">
              <FaLeaf className="mr-2" />
              <span>Canh tác hữu cơ, thân thiện với môi trường</span>
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
              src="/images/farm.jpg"
              alt="Trang trại"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Black Soldier Fly Section */}
      <Section id="bsf" bgColor="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ruồi Lính Đen</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ruồi lính đen (Black Soldier Fly) là một loài côn trùng có khả năng phân hủy chất thải hữu cơ
            và chuyển hóa thành protein chất lượng cao, là nguồn thức ăn tuyệt vời cho vật nuôi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Xử Lý Chất Thải"
            description="Ấu trùng ruồi lính đen có khả năng phân hủy chất thải hữu cơ nhanh chóng, giúp giảm thiểu ô nhiễm môi trường."
            icon={<FaRecycle size={24} />}
            href="/ruoi-linh-den"
            delay={0.1}
          />
          <FeatureCard
            title="Nguồn Protein Cao"
            description="Ấu trùng ruồi lính đen chứa hàm lượng protein cao (40-45%), là nguồn thức ăn giàu dinh dưỡng cho vật nuôi."
            icon={<FaBug size={24} />}
            href="/ruoi-linh-den"
            delay={0.2}
          />
          <FeatureCard
            title="Canh Tác Bền Vững"
            description="Việc nuôi ruồi lính đen giúp tạo ra một chu trình sản xuất khép kín, thân thiện với môi trường và bền vững."
            icon={<FaSeedling size={24} />}
            href="/ruoi-linh-den"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Duck Farm Section */}
      <Section id="ducks" bgColor="bg-green-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Trang Trại Vịt</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Trang trại vịt của chúng tôi áp dụng phương pháp chăn nuôi tự nhiên,
            kết hợp với việc sử dụng ấu trùng ruồi lính đen làm thức ăn, tạo ra sản phẩm chất lượng cao.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Vịt Thả Vườn"
            description="Vịt được nuôi trong môi trường tự nhiên, thoáng mát, có không gian rộng rãi để vận động."
            icon={<FaFeather size={24} />}
            href="/trang-trai-vit"
            delay={0.1}
          />
          <FeatureCard
            title="Thức Ăn Tự Nhiên"
            description="Vịt được cho ăn thức ăn tự nhiên, bao gồm ấu trùng ruồi lính đen giàu protein, tạo ra thịt vịt thơm ngon, bổ dưỡng."
            icon={<FaLeaf size={24} />}
            href="/trang-trai-vit"
            delay={0.2}
          />
          <FeatureCard
            title="Trứng Vịt Sạch"
            description="Trứng vịt từ trang trại của chúng tôi đảm bảo sạch, an toàn, giàu dinh dưỡng và có hương vị thơm ngon tự nhiên."
            icon={<FaEgg size={24} />}
            href="/trang-trai-vit"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Liên Hệ Với Chúng Tôi</h2>
            <p className="text-gray-600 mb-8">
              Nếu bạn quan tâm đến sản phẩm của chúng tôi hoặc muốn tìm hiểu thêm về trang trại,
              vui lòng liên hệ với chúng tôi qua form bên cạnh hoặc thông tin dưới đây:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Điện Thoại</h3>
                  <p className="text-gray-600">0989205010</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Địa Chỉ</h3>
                  <p className="text-gray-600">Thôn 1, Vinh Thanh, Phú Vang, Huế</p>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] rounded-xl overflow-hidden">
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

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
