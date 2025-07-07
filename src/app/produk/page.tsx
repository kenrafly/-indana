import Image from "next/image";
import Button from "@/components/Button";
import Section from "@/components/Section";

export const metadata = {
  title: "Produk Kami | Indana - Minyak Goreng Berkualitas",
  description:
    "Lihat varian produk minyak goreng Indana yang berkualitas untuk kebutuhan memasak sehari-hari",
};

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
      <Section background="dark" padding="normal">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            Produk Kami: Pilihan Minyak Goreng Terbaik untuk Kebutuhan Anda
          </h1>
          <p className="text-lg text-gray-300">
            Kami menghadirkan berbagai varian minyak goreng berkualitas tinggi
            untuk memenuhi berbagai kebutuhan memasak Anda. Setiap produk kami
            diproduksi dengan standar kualitas tertinggi untuk memastikan hasil
            masakan yang lezat dan sehat.
          </p>
        </div>
      </Section>

      {/* Products List */}
      <Section background="dark" padding="normal">
        <div className="grid md:grid-cols-2 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700"
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
                <p className="text-gray-300 mb-4">{product.description}</p>

                <h3 className="text-lg font-semibold mb-2">Manfaat Utama:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-300">
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="flex">
                  <div className="mr-3">
                    <Image
                      src="/halal.png"
                      alt="Halal Certified"
                      width={40}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </div>
                  <div>
                    <Image
                      src="/bpom.svg"
                      alt="BPOM Approved"
                      width={40}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <Button href="#" variant="primary">
                    Beli Sekarang
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Production Process */}
      <Section background="dark" padding="normal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Proses Produksi Berkualitas
          </h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-md border border-gray-700">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <Image
                  src="/production-facility.jpg"
                  alt="Fasilitas Produksi Indana"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-sm"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-300 mb-4">
                  Minyak goreng Indana diproduksi di fasilitas modern yang
                  menerapkan standar kebersihan dan keamanan pangan tertinggi.
                  Kami menggunakan teknologi pemurnian terkini untuk
                  menghasilkan minyak goreng berkualitas premium.
                </p>
                <p className="text-gray-300">
                  Setiap batch produksi kami melewati serangkaian tes kualitas
                  yang ketat sebelum dikemas dan didistribusikan ke pasar. Ini
                  memastikan bahwa setiap tetes minyak goreng Indana memenuhi
                  standar kualitas yang kami janjikan.
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
            Tertarik dengan Produk Kami?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Hubungi kami sekarang untuk informasi lebih lanjut atau pemesanan
            dalam jumlah besar
          </p>
          <Button href="/kontak" className="text-lg px-8 py-4">
            Hubungi Kami
          </Button>
        </div>
      </Section>
    </>
  );
}
