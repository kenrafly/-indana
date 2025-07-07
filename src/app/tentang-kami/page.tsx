"use client"

import Image from "next/image";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { FaUser } from "react-icons/fa6";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import Reveal from "@/components/animations/Reveal";

// export const metadata = {
//   title: "Tentang Kami | Indana - Minyak Goreng Berkualitas",
//   description:
//     "Mengenal lebih dekat PT Indana, produsen minyak goreng berkualitas dengan komitmen pada kualitas dan kesehatan",
// };

export default function TentangKamiPage() {
  const teamMembers = [
    {
      name: "Bapak Hendra Wijaya",
      position: "Direktur Utama",
      image: "/team-ceo.jpg",
    },
    {
      name: "Ibu Sari Dewi",
      position: "Manajer Produksi",
      image: "/team-production.jpg",
    },
    {
      name: "Bapak Ahmad Fadli",
      position: "Kepala Jaminan Mutu",
      image: "/team-quality.jpg",
    },
    {
      name: "Ibu Maya Indah",
      position: "Manajer Pemasaran",
      image: "/team-marketing.jpg",
    },
  ];

  const certificates = [
    {
      name: "Sertifikasi Halal MUI",
      image: "/bpom.svg",
    },
    {
      name: "BPOM RI",
      image: "/bpom.svg",
    },
    {
      name: "ISO 9001:2015",
      image: "/bpom.svg",
    },
    {
      name: "ISO 22000:2018",
      image: "/bpom.svg",
    },
    {
      name: "SNI",
      image: "/bpom.svg",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <Section background="light" padding="normal">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl font-bold mb-6">
              Mengenal Lebih Dekat PT Indana
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg text-gray-600">
              Perjalanan kami dalam menghadirkan minyak goreng berkualitas untuk
              keluarga Indonesia
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Company Narrative */}
      <Section background="white" padding="normal">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal width="100%" delay={0.1}>
              <h2 className="text-3xl font-bold mb-6">Sejarah Singkat</h2>
            </Reveal>
            <FadeIn delay={0.3} direction="left">
              <p className="text-gray-700 mb-4">
                PT Indana didirikan pada tahun 2005 oleh sekelompok pengusaha
                lokal yang memiliki visi untuk menghadirkan produk minyak goreng
                berkualitas tinggi dengan harga terjangkau bagi masyarakat
                Indonesia.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} direction="left">
              <p className="text-gray-700 mb-4">
                Berawal dari fasilitas produksi sederhana di Jawa Timur, kami
                terus berkembang dan berinovasi hingga kini memiliki pabrik
                modern dengan teknologi terkini yang mampu menghasilkan produk
                minyak goreng berkualitas premium.
              </p>
            </FadeIn>
            <FadeIn delay={0.5} direction="left">
              <p className="text-gray-700">
                Selama perjalanan kami, komitmen pada kualitas, kebersihan, dan
                nilai gizi tetap menjadi prioritas utama. Inilah yang membuat
                Indana menjadi salah satu pilihan utama keluarga Indonesia untuk
                kebutuhan memasak sehari-hari.
              </p>
            </FadeIn>
          </div>
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="/factory.jpg"
              alt="Sejarah PT Indana"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </Section>

      {/* Mission Vision */}
      <Section background="light" padding="normal">
        <div className="max-w-4xl mx-auto">
          <Reveal width="100%" delay={0.1}>
            <h2 className="text-3xl font-bold text-center mb-12">
              Misi & Visi Kami
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Misi</h3>
              <ul className="list-disc pl-5 space-y-2">
                <motion.li
                  className="text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  Menghasilkan produk minyak goreng berkualitas tinggi dengan
                  harga yang terjangkau
                </motion.li>
                <motion.li
                  className="text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  Berkontribusi pada peningkatan standar kesehatan masyarakat
                  Indonesia
                </motion.li>
                <motion.li
                  className="text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  Menerapkan praktik produksi yang ramah lingkungan dan
                  berkelanjutan
                </motion.li>
                <motion.li
                  className="text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  Menciptakan nilai tambah bagi semua pemangku kepentingan
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Visi</h3>
              <p className="text-gray-700">
                Menjadi perusahaan produsen minyak goreng terkemuka di Indonesia
                yang dikenal dengan kualitas, inovasi, dan komitmen pada
                kesehatan masyarakat, serta menjadi mitra utama dalam memenuhi
                kebutuhan minyak goreng rumah tangga dan industri.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section background="white" padding="normal">
        <Reveal width="100%" delay={0.1}>
          <h2 className="text-3xl font-bold text-center mb-12">
            Nilai-Nilai Inti
          </h2>
        </Reveal>
        <StaggerContainer
          className="grid md:grid-cols-4 gap-6"
          delayChildren={0.2}
          staggerChildren={0.15}
        >
          <StaggerItem>
            <motion.div
              className="bg-yellow-50 p-6 rounded-lg text-center"
              whileHover={{
                y: -10,
                boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <ScaleIn delay={0.1}>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </ScaleIn>
              <h3 className="text-xl font-bold mb-2">Kualitas</h3>
              <p className="text-gray-600">
                Kami berkomitmen pada standar kualitas tertinggi dalam setiap
                aspek bisnis kami
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="bg-yellow-50 p-6 rounded-lg text-center"
              whileHover={{
                y: -10,
                boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <ScaleIn delay={0.2}>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </ScaleIn>
              <h3 className="text-xl font-bold mb-2">Integritas</h3>
              <p className="text-gray-600">
                Kami menjalankan bisnis dengan kejujuran, transparansi, dan
                etika yang kuat
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="bg-yellow-50 p-6 rounded-lg text-center"
              whileHover={{
                y: -10,
                boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <ScaleIn delay={0.3}>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
              </ScaleIn>
              <h3 className="text-xl font-bold mb-2">Kolaborasi</h3>
              <p className="text-gray-600">
                Kami bekerja sama sebagai satu tim untuk mencapai tujuan bersama
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="bg-yellow-50 p-6 rounded-lg text-center"
              whileHover={{
                y: -10,
                boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <ScaleIn delay={0.4}>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </ScaleIn>
              <h3 className="text-xl font-bold mb-2">Inovasi</h3>
              <p className="text-gray-600">
                Kami terus mencari cara untuk meningkatkan produk dan proses
                kami
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* Certifications */}
      <Section background="light" padding="normal">
        <Reveal width="100%" delay={0.1}>
          <h2 className="text-3xl font-bold text-center mb-12">
            Sertifikasi & Penghargaan
          </h2>
        </Reveal>
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-5 gap-6"
          delayChildren={0.2}
          staggerChildren={0.15}
        >
          {certificates.map((cert, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-white p-4 rounded-lg flex flex-col items-center justify-center shadow-md h-40"
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <p className="text-center font-medium text-gray-800">
                  {cert.name}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Team Section */}
      <Section background="white" padding="normal">
        <Reveal width="100%" delay={0.1}>
          <h2 className="text-3xl font-bold text-center mb-12">
            Tim Manajemen
          </h2>
        </Reveal>
        <StaggerContainer
          className="grid md:grid-cols-4 gap-8"
          delayChildren={0.2}
          staggerChildren={0.15}
        >
          {teamMembers.map((member, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="text-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-40 h-40 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <FaUser className="h-full w-full object-cover text-gray-300 bg-gray-100" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA Section */}
      <Section background="light" padding="normal">
        <div className="text-center">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-bold mb-6">
              Tertarik Bekerja Sama Dengan Kami?
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Kami selalu terbuka untuk peluang kerjasama dengan distributor dan
              mitra bisnis lainnya
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
