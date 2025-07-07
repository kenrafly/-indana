"use client"

import Image from "next/image";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import Reveal from "@/components/animations/Reveal";

// export const metadata = {
//   title: "Hubungi Kami | Indana - Minyak Goreng Berkualitas",
//   description:
//     "Hubungi tim Indana untuk informasi lebih lanjut tentang produk kami atau kerjasama bisnis",
// };

export default function KontakPage() {
  return (
    <>
      {/* Header Section */}
      <Section background="light" padding="normal">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl font-bold mb-6">
              Hubungi Kami: Kami Siap Membantu Anda
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg text-gray-600">
              Kami selalu siap menjawab pertanyaan, menerima masukan, atau
              mendiskusikan potensi kerjasama bisnis dengan Anda
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Contact Form and Info */}
      <Section background="white" padding="normal">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Reveal width="100%" delay={0.1}>
              <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
            </Reveal>
            <StaggerContainer
              className="space-y-6"
              delayChildren={0.2}
              staggerChildren={0.1}
            >
              <StaggerItem>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nama Lengkap
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap Anda"
                    required
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 0 3px rgba(245, 158, 11, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Masukkan alamat email Anda"
                    required
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 0 3px rgba(245, 158, 11, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nomor Telepon (Opsional)
                  </label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Masukkan nomor telepon Anda"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 0 3px rgba(245, 158, 11, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pesan
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Tuliskan pesan Anda di sini"
                    required
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 0 3px rgba(245, 158, 11, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  ></motion.textarea>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="text-right">
                  <Button variant="primary">Kirim Pesan</Button>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Contact Info */}
          <div>
            <Reveal width="100%" delay={0.3}>
              <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
            </Reveal>
            <div className="space-y-6">
              <FadeIn delay={0.4} direction="right">
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Alamat Kantor
                    </h3>
                    <p className="text-gray-700">
                      Jl. Industri Raya No. 123
                      <br />
                      Kawasan Industri Jababeka
                      <br />
                      Cikarang, Bekasi 17530
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5} direction="right">
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telepon</h3>
                    <p className="text-gray-700">
                      Kantor: +62 21 8888 9999
                      <br />
                      Layanan Pelanggan: 0800-123-4567 (Bebas Pulsa)
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6} direction="right">
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-700">
                      Informasi Umum: info@indana.co.id
                      <br />
                      Layanan Pelanggan: cs@indana.co.id
                      <br />
                      Karir: karir@indana.co.id
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.7} direction="right">
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Jam Operasional
                    </h3>
                    <p className="text-gray-700">
                      Senin - Jumat: 08.00 - 17.00 WIB
                      <br />
                      Sabtu: 09.00 - 14.00 WIB
                      <br />
                      Minggu & Hari Libur Nasional: Tutup
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="light" padding="normal">
        <Reveal width="100%" delay={0.1}>
          <h2 className="text-3xl font-bold text-center mb-8">Lokasi Kami</h2>
        </Reveal>
        <ScaleIn delay={0.3}>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-center">
                Peta lokasi akan ditampilkan di sini.
              </p>
            </div>
          </div>
        </ScaleIn>
      </Section>

      {/* FAQ Section */}
      <Section background="white" padding="normal">
        <div className="max-w-3xl mx-auto">
          <Reveal width="100%" delay={0.1}>
            <h2 className="text-3xl font-bold text-center mb-12">
              Pertanyaan Umum
            </h2>
          </Reveal>

          <div className="space-y-6">
            <StaggerContainer
              delayChildren={0.2}
              staggerChildren={0.15}
              className="space-y-6"
            >
              <StaggerItem>
                <motion.div
                  className="bg-gray-50 rounded-lg p-6"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-3">
                    Bagaimana cara memesan produk dalam jumlah besar?
                  </h3>
                  <p className="text-gray-700">
                    Untuk pemesanan dalam jumlah besar, silakan hubungi tim
                    penjualan kami melalui telepon di +62 21 8888 9999 atau
                    email ke sales@indana.co.id. Kami juga menyediakan penawaran
                    khusus untuk pembelian dalam jumlah besar.
                  </p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  className="bg-gray-50 rounded-lg p-6"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-3">
                    Apakah ada diskon untuk distributor?
                  </h3>
                  <p className="text-gray-700">
                    Ya, kami menyediakan harga khusus dan program kerja sama
                    untuk distributor resmi kami. Silakan kirimkan proposal
                    bisnis Anda ke partnership@indana.co.id untuk informasi
                    lebih lanjut.
                  </p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  className="bg-gray-50 rounded-lg p-6"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-3">
                    Berapa lama waktu pengiriman untuk pemesanan online?
                  </h3>
                  <p className="text-gray-700">
                    Untuk pemesanan online, waktu pengiriman biasanya
                    membutuhkan 2-3 hari kerja untuk wilayah Jabodetabek dan 5-7
                    hari kerja untuk wilayah lain di Indonesia, tergantung pada
                    lokasi dan ketersediaan stok.
                  </p>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="light" padding="normal">
        <div className="text-center">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">
              Siap Menjawab Kebutuhan Anda
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tim kami siap memberikan solusi terbaik untuk kebutuhan minyak
              goreng Anda, baik untuk rumah tangga maupun industri
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <Button variant="primary" className="text-lg px-8 py-4">
              Hubungi Kami Sekarang
            </Button>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
