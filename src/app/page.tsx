import Image from "next/image";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { FaRegUser } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-yellow-50 py-20 md:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Minyak Goreng Pilihan Keluarga: Kualitas Terbaik untuk Setiap
              Masakan Anda
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Diproses Higienis, Lebih Sehat, Rasa Lebih Lezat
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/produk">Lihat Produk Kami</Button>
              <Button href="/tentang-kami" variant="outline">
                Jelajahi Manfaatnya
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-94">
            <Image
              src="/cooking-oil.png"
              alt="Indana Minyak Goreng"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <Section background="white" padding="normal">
        <h2 className="text-3xl font-bold text-center mb-12">
          Keunggulan Utama
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Benefit 1 */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-yellow-100 rounded-full p-4 mb-4 w-20 h-20 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-yellow-600"
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
            <h3 className="text-xl font-semibold mb-2">Bebas Kolesterol</h3>
            <p className="text-gray-600">
              Aman untuk kesehatan jantung dan pembuluh darah Anda
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-yellow-100 rounded-full p-4 mb-4 w-20 h-20 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sumber Vitamin E</h3>
            <p className="text-gray-600">
              Kaya akan vitamin E untuk menjaga kesehatan kulit
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-yellow-100 rounded-full p-4 mb-4 w-20 h-20 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Ekonomis</h3>
            <p className="text-gray-600">
              Tahan lama dengan harga terjangkau untuk seluruh keluarga
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-yellow-100 rounded-full p-4 mb-4 w-20 h-20 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-yellow-600"
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
            <h3 className="text-xl font-semibold mb-2">Higienis</h3>
            <p className="text-gray-600">
              Diproduksi dalam lingkungan bersih dengan standar tinggi
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonial Section */}
      <Section background="light" padding="normal">
        <h2 className="text-3xl font-bold text-center mb-12">
          Apa Kata Mereka
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <FaRegUser />
            <div className="text-lg text-gray-700 mb-6 pt-6 pl-10">
              "Saya sudah menggunakan minyak goreng Indana selama
              bertahun-tahun. Rasanya sangat netral dan membuat gorengan menjadi
              lebih renyah. Tidak pernah mengecewakan dan selalu menjadi pilihan
              utama untuk keluarga kami."
            </div>
            <div className="flex items-center gap-5">
              <FaRegUser />
              <div>
                <p className="font-semibold">Ibu Siti</p>
                <p className="text-gray-500 text-sm">
                  Ibu Rumah Tangga, Jakarta
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="normal">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Mulai Gunakan Minyak Goreng Berkualitas
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Tingkatkan kualitas masakan Anda dengan minyak goreng Indana yang
            sehat dan berkualitas tinggi
          </p>
          <Button href="/produk" className="text-lg px-8 py-4">
            Lihat Produk Kami
          </Button>
        </div>
      </Section>
    </>
  );
}
