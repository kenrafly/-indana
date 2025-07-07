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
      image: "/halal.png",
    },
    {
      name: "BPOM RI",
      image: "/bpom.png",
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
          <p className="text-lg text-gray-300">
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
            <p className="text-gray-300 mb-4">
              PT Indana didirikan pada tahun 2005 oleh sekelompok pengusaha
              lokal yang memiliki visi untuk menghadirkan produk minyak goreng
              berkualitas tinggi dengan harga terjangkau bagi masyarakat
              Indonesia.
            </p>
            <p className="text-gray-300 mb-4">
              Berawal dari fasilitas produksi sederhana di Jawa Timur, kami
              terus berkembang dan berinovasi hingga kini memiliki pabrik modern
              dengan teknologi terkini yang mampu menghasilkan produk minyak
              goreng berkualitas premium.
            </p>
            <p className="text-gray-300">
              Selama perjalanan kami, komitmen pada kualitas, kebersihan, dan
              nilai gizi tetap menjadi prioritas utama. Inilah yang membuat
              Indana menjadi salah satu pilihan utama keluarga Indonesia untuk
              kebutuhan memasak sehari-hari.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="/factory.jpg"
              alt="Pabrik PT Indana"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section background="light" padding="normal">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Visi & Misi</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Visi</h3>
              <p className="text-gray-300">
                Menjadi produsen minyak goreng terkemuka yang menghadirkan
                produk berkualitas tinggi dan terjangkau, serta berkontribusi
                positif bagi kesehatan masyarakat Indonesia
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Misi</h3>
              <ul className="text-gray-300 space-y-2 text-left list-disc pl-5">
                <li>
                  Memproduksi minyak goreng berkualitas dengan standar higienis
                  tertinggi
                </li>
                <li>
                  Menyediakan produk dengan harga terjangkau untuk semua lapisan
                  masyarakat
                </li>
                <li>
                  Mendukung kesehatan masyarakat melalui produk yang bebas
                  kolesterol dan kaya nutrisi
                </li>
                <li>
                  Menerapkan praktik bisnis berkelanjutan dan ramah lingkungan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Production Process */}
      <Section background="white" padding="normal">
        <h2 className="text-3xl font-bold text-center mb-12">
          Proses Produksi Berkualitas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-yellow-400 text-3xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Pemilihan Bahan Baku</h3>
            <p className="text-gray-300">
              Kami memilih buah sawit terbaik dari perkebunan terpercaya untuk
              memastikan kualitas minyak yang dihasilkan
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-yellow-400 text-3xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Proses Ekstraksi</h3>
            <p className="text-gray-300">
              Minyak diekstrak dengan metode yang menjaga nutrisi dan vitamin
              alami tetap terjaga
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-yellow-400 text-3xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Pemurnian & Pengawasan Mutu
            </h3>
            <p className="text-gray-300">
              Proses pemurnian canggih dan kontrol kualitas ketat untuk
              memastikan produk akhir yang sempurna
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button href="/produk">Lihat Produk Kami</Button>
        </div>
      </Section>

      {/* Our Team */}
      <Section background="light" padding="normal">
        <h2 className="text-3xl font-bold text-center mb-12">Tim Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                  <FaUser className="text-5xl text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section background="white" padding="normal">
        <h2 className="text-3xl font-bold text-center mb-12">
          Sertifikasi & Penghargaan
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-800 rounded-lg p-4 h-full flex flex-col items-center justify-center border border-gray-700">
                <div className="w-20 h-20 relative mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-medium text-gray-300">{cert.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Facility Images */}
      <Section background="light" padding="normal">
        <h2 className="text-3xl font-bold text-center mb-12">
          Fasilitas Produksi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/production-facility.jpg"
              alt="Fasilitas Produksi Indana"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/production-facility.jpg"
              alt="Fasilitas Produksi Indana"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
