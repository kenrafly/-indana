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
//   title: "Produk Kami | Indana - Minyak Goreng Berkualitas",
//   description:
//     "Lihat varian produk minyak goreng Indana yang berkualitas untuk kebutuhan memasak sehari-hari",
// };

export default function ProdukPage() {
  const products = [
    {
      id: 1,
      name: "Minyak Goreng Sawit Murni 1 Liter",
      description:
        "Minyak goreng berkualitas tinggi dalam kemasan praktis 1 liter, cocok untuk kebutuhan rumah tangga sehari-hari.",
      image: "/minyak.jpg",
      benefits: [
        "Kaya Vitamin A & D",
        "Tidak Mudah Tengik",
        "Cocok untuk Semua Jenis Masakan",
      ],
    },
    {
      id: 2,
      name: "Minyak Goreng Sawit Murni 2 Liter",
      description:
        "Minyak goreng berkualitas tinggi dalam kemasan ekonomis 2 liter, lebih hemat untuk keluarga.",
      image: "/minyak.jpg",
      benefits: [
        "Kaya Vitamin A & D",
        "Tidak Mudah Tengik",
        "Cocok untuk Semua Jenis Masakan",
        "Lebih Hemat",
      ],
    },
    {
      id: 3,
      name: "Minyak Goreng Sawit Murni 5 Liter",
      description:
        "Minyak goreng berkualitas premium dalam kemasan jerigen 5 liter, solusi ekonomis untuk usaha kuliner.",
      image: "/minyak.jpg",
      benefits: [
        "Kaya Vitamin A & D",
        "Tidak Mudah Tengik",
        "Cocok untuk Semua Jenis Masakan",
        "Sangat Ekonomis untuk Usaha",
      ],
    },
    {
      id: 4,
      name: "Minyak Goreng Sawit Premium 1 Liter",
      description:
        "Varian premium minyak goreng Indana dengan kandungan nutrisi lebih tinggi, dalam kemasan botol 1 liter.",
      image: "/minyak.jpg",
      benefits: [
        "Kaya Omega-3 dan Omega-6",
        "Bebas Kolesterol 100%",
        "Hasil Gorengan Lebih Renyah",
        "Aroma Lebih Harum",
      ],
    },
  ];

  return (
    <>
      {/* Header Section */}
      <Section background="light" padding="normal">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl font-bold mb-6">
              Produk Kami: Pilihan Minyak Goreng Terbaik untuk Kebutuhan Anda
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg text-gray-600">
              Kami menghadirkan berbagai varian minyak goreng berkualitas tinggi
              untuk memenuhi berbagai kebutuhan memasak Anda. Setiap produk kami
              diproduksi dengan standar kualitas tertinggi untuk memastikan
              hasil masakan yang lezat dan sehat.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Products List */}
      <Section background="white" padding="normal">
        <StaggerContainer
          className="grid md:grid-cols-2 gap-12"
          delayChildren={0.1}
          staggerChildren={0.2}
        >
          {products.map(product => (
            <StaggerItem key={product.id}>
              <motion.div
                className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100"
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <h3 className="text-lg font-semibold mb-2">Manfaat Utama:</h3>
                  <ul className="list-disc pl-5 mb-6 space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        className="text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex">
                    <motion.div
                      className="mr-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src="/halal.png"
                        alt="Halal Certified"
                        width={40}
                        height={40}
                        className="h-10 w-auto"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src="/bpom.svg"
                        alt="BPOM Approved"
                        width={40}
                        height={40}
                        className="h-10 w-auto object-contain"
                      />
                    </motion.div>
                  </div>

                  <div className="mt-6">
                    <Button href="#" variant="primary">
                      Beli Sekarang
                    </Button>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Production Process */}
      <Section background="light" padding="normal">
        <div className="max-w-4xl mx-auto">
          <Reveal width="100%" delay={0.1}>
            <h2 className="text-3xl font-bold text-center mb-8">
              Proses Produksi Berkualitas
            </h2>
          </Reveal>
          <ScaleIn delay={0.3}>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.div
                  className="md:w-1/2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/production-facility.jpg"
                    alt="Fasilitas Produksi Indana"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-sm"
                  />
                </motion.div>
                <div className="md:w-1/2">
                  <FadeIn delay={0.4} direction="right">
                    <p className="text-gray-700 mb-4">
                      Minyak goreng Indana diproduksi di fasilitas modern yang
                      menerapkan standar kebersihan dan keamanan pangan
                      tertinggi. Kami menggunakan teknologi pemurnian terkini
                      untuk menghasilkan minyak goreng berkualitas premium.
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.6} direction="right">
                    <p className="text-gray-700">
                      Setiap batch produksi kami melewati serangkaian tes
                      kualitas yang ketat sebelum dikemas dan didistribusikan ke
                      pasar. Ini memastikan bahwa setiap tetes minyak goreng
                      Indana memenuhi standar kualitas yang kami janjikan.
                    </p>
                  </FadeIn>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="normal">
        <div className="text-center">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">
              Tertarik dengan Produk Kami?
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Hubungi kami sekarang untuk informasi lebih lanjut atau pemesanan
              dalam jumlah besar
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <Button href="/kontak" className="text-lg px-8 py-4">
              Hubungi Kami
            </Button>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
