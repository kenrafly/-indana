import Image from "next/image";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { FaUser } from "react-icons/fa6";

export const metadata = {
  title: "Tentang Kami | Indana - Minyak Goreng Berkualitas",
  description:
    "Mengenal lebih dekat PT Indana, produsen minyak goreng berkualitas dengan komitmen pada kualitas dan kesehatan",
};

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
          <h1 className="text-4xl font-bold mb-6">
            Mengenal Lebih Dekat PT Indana
          </h1>
          <p className="text-lg text-gray-600">
            Perjalanan kami dalam menghadirkan minyak goreng berkualitas untuk
            keluarga Indonesia
          </p>
        </div>
      </Section>

      {/* Company Narrative */}
      <Section background="white" padding="normal">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Sejarah Singkat</h2>
            <p className="text-gray-700 mb-4">
              PT Indana didirikan pada tahun 2005 oleh sekelompok pengusaha
              lokal yang memiliki visi untuk menghadirkan produk minyak goreng
              berkualitas tinggi dengan harga terjangkau bagi masyarakat
              Indonesia.
            </p>
            <p className="text-gray-700 mb-4">
              Berawal dari fasilitas produksi sederhana di Jawa Timur, kami
              terus berkembang dan berinovasi hingga kini memiliki pabrik modern
              dengan teknologi terkini yang mampu menghasilkan produk minyak
              goreng berkualitas premium.
            </p>
            <p className="text-gray-700">
              Selama perjalanan kami, komitmen pada kualitas, kebersihan, dan
              nilai gizi tetap menjadi prioritas utama. Inilah yang membuat
              Indana menjadi salah satu pilihan utama keluarga Indonesia untuk
              kebutuhan memasak sehari-hari.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="/factory.jpg"
              alt="Sejarah PT Indana"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Mission Vision */}
      <Section background="light" padding="normal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Misi & Visi Kami
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Misi</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">
                  Menghasilkan produk minyak goreng berkualitas tinggi dengan
                  harga yang terjangkau
                </li>
                <li className="text-gray-700">
                  Berkontribusi pada peningkatan standar kesehatan masyarakat
                  Indonesia
                </li>
                <li className="text-gray-700">
                  Menerapkan praktik produksi yang ramah lingkungan dan
                  berkelanjutan
                </li>
                <li className="text-gray-700">
                  Menciptakan nilai tambah bagi semua pemangku kepentingan
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Visi</h3>
              <p className="text-gray-700">
                Menjadi perusahaan produsen minyak goreng terkemuka di Indonesia
                yang dikenal dengan kualitas, inovasi, dan komitmen pada
                kesehatan masyarakat, serta menjadi mitra utama dalam memenuhi
                kebutuhan minyak goreng rumah tangga dan industri.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section background="white" padding="normal">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nilai-Nilai Inti
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-yellow-50 p-6 rounded-lg text-center">
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
            <h3 className="text-xl font-bold mb-2">Kualitas</h3>
            <p className="text-gray-600">
              Kami berkomitmen pada standar kualitas tertinggi dalam setiap
              aspek bisnis kami
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg text-center">
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
            <h3 className="text-xl font-bold mb-2">Kesehatan</h3>
            <p className="text-gray-600">
              Kami memprioritaskan aspek kesehatan dalam setiap produk yang kami
              hasilkan
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Inovasi</h3>
            <p className="text-gray-600">
              Kami terus berinovasi untuk menghasilkan produk yang lebih baik
              dan proses yang lebih efisien
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg text-center">
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
            <h3 className="text-xl font-bold mb-2">Keberlanjutan</h3>
            <p className="text-gray-600">
              Kami berkomitmen pada praktik berkelanjutan dan meminimalkan
              dampak lingkungan
            </p>
          </div>
        </div>
      </Section>

      {/* Production Philosophy */}
      <Section background="light" padding="normal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Filosofi Produksi
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <Image
                  src="/factory.jpg"
                  alt="Filosofi Produksi Indana"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-sm"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  Kami percaya bahwa kualitas minyak goreng terbaik berasal dari
                  bahan baku terbaik. Oleh karena itu, kami hanya menggunakan
                  bahan baku pilihan dari perkebunan kelapa sawit yang dikelola
                  secara berkelanjutan.
                </p>
                <p className="text-gray-700 mb-4">
                  Proses produksi kami menggabungkan teknologi modern dengan
                  pengawasan ketat untuk memastikan bahwa setiap tetes minyak
                  goreng Indana memenuhi standar kualitas yang tinggi. Kami
                  melakukan pemurnian berlapis untuk menghilangkan kotoran dan
                  memaksimalkan kandungan nutrisi.
                </p>
                <p className="text-gray-700">
                  Inovasi terus-menerus dalam proses produksi memungkinkan kami
                  untuk menghasilkan minyak goreng yang tidak hanya berkualitas
                  tinggi, tetapi juga lebih sehat dan ekonomis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section background="white" padding="normal">
        <h2 className="text-3xl font-bold text-center mb-12">
          Sertifikasi & Penghargaan
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-3 relative">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-medium">{cert.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section (Optional) */}
      <Section background="light" padding="normal">
        <h2 className="text-3xl font-bold text-center mb-12">Tim Kami</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 relative rounded-full overflow-hidden">
                <FaUser className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="normal">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Bergabunglah dengan Keluarga Indana
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Rasakan perbedaan minyak goreng berkualitas tinggi dalam setiap
            masakan Anda
          </p>
          <Button href="/produk" className="text-lg px-8 py-4">
            Lihat Produk Kami
          </Button>
        </div>
      </Section>
    </>
  );
}
