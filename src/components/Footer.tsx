import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaYoutube, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-green-700 to-green-800 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="relative w-12 h-12 mr-3 bg-white rounded-full p-2">
                                <Image
                                    src="/images/logo-192.png"
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold">Trang Trại Huế</h3>
                        </div>
                        <p className="mb-6 text-gray-200 leading-relaxed">
                            Chuyên nuôi ruồi lính đen và vịt tại Huế. Chúng tôi cung cấp các sản phẩm chất lượng cao,
                            thân thiện với môi trường và đảm bảo an toàn thực phẩm.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                                aria-label="Facebook"
                            >
                                <FaFacebook size={20} />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                                aria-label="YouTube"
                            >
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:ml-8">
                        <h3 className="text-xl font-bold mb-6 relative">
                            <span className="relative z-10">Liên Kết Nhanh</span>
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-green-400 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Trang Chủ', href: '/' },
                                { name: 'Ruồi Lính Đen', href: '/ruoi-linh-den' },
                                { name: 'Trang Trại Vịt', href: '/trang-trai-vit' },
                                { name: 'Về Chúng Tôi', href: '/ve-chung-toi' },
                                { name: 'Liên Hệ', href: '/lien-he' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center text-gray-200 hover:text-white transition-colors group"
                                    >
                                        <FaChevronRight className="mr-2 text-green-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold mb-6 relative">
                            <span className="relative z-10">Thông Tin Liên Hệ</span>
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-green-400 rounded-full"></span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="flex items-center mb-2">
                                    <div className="bg-green-500 p-2 rounded-full mr-3">
                                        <FaPhone className="text-white" />
                                    </div>
                                    <h4 className="font-medium">Điện Thoại</h4>
                                </div>
                                <p className="text-gray-200 ml-11">0989205010</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="flex items-center mb-2">
                                    <div className="bg-green-500 p-2 rounded-full mr-3">
                                        <FaEnvelope className="text-white" />
                                    </div>
                                    <h4 className="font-medium">Email</h4>
                                </div>
                                <p className="text-gray-200 ml-11">info@trangtrai.com</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors md:col-span-2">
                                <div className="flex items-center mb-2">
                                    <div className="bg-green-500 p-2 rounded-full mr-3">
                                        <FaMapMarkerAlt className="text-white" />
                                    </div>
                                    <h4 className="font-medium">Địa Chỉ</h4>
                                </div>
                                <p className="text-gray-200 ml-11">Thôn 1, Vinh Thanh, Phú Vang, Huế</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-green-600/30 mt-12 pt-8 text-center text-gray-300 text-sm">
                    <p>&copy; {new Date().getFullYear()} Trang Trại Huế. Tất cả các quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 