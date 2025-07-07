import Image from "next/image";
import Button from "@/components/Button";
import Section from "@/components/Section";

export const metadata = {
  title: "Hubungi Kami | Indana - Minyak Goreng Berkualitas",
  description:
    "Hubungi tim Indana untuk informasi lebih lanjut tentang produk kami atau kerjasama bisnis",
};

export default function KontakPage() {
  return (
    <>
      {/* Header Section */}
      <Section background="light" padding="normal">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            Hubungi Kami: Kami Siap Membantu Anda
          </h1>
          <p className="text-lg text-gray-300">
            Kami selalu siap menjawab pertanyaan, menerima masukan, atau
            mendiskusikan potensi kerjasama bisnis dengan Anda
          </p>
        </div>
      </Section>

      {/* Contact Form and Info */}
      <Section background="white" padding="normal">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-zinc-700 rounded-md bg-black text-gray-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Masukkan nama lengkap Anda"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-zinc-700 rounded-md bg-black text-gray-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Masukkan alamat email Anda"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Nomor Telepon (Opsional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-zinc-700 rounded-md bg-black text-gray-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Masukkan nomor telepon Anda"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-zinc-700 rounded-md bg-black text-gray-100 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Tuliskan pesan Anda di sini"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-md transition-colors"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-zinc-900 rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-yellow-400"
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
                  <h3 className="text-lg font-semibold mb-1">Alamat Kantor</h3>
                  <p className="text-gray-400">
                    Jl. Industri No. 123
                    <br />
                    Jakarta Selatan, 12345
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-zinc-900 rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Telepon</h3>
                  <p className="text-gray-400">
                    (021) 123-4567
                    <br />
                    (021) 765-4321
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-zinc-900 rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-yellow-400"
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
                  <p className="text-gray-400">
                    info@indana.co.id
                    <br />
                    cs@indana.co.id
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-zinc-900 rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-yellow-400"
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
                  <p className="text-gray-400">
                    Senin - Jumat: 08.00 - 17.00 WIB
                    <br />
                    Sabtu: 08.00 - 12.00 WIB
                    <br />
                    Minggu & Hari Libur: Tutup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Google Map Section */}
      <Section background="light" padding="normal">
        <h2 className="text-3xl font-bold text-center mb-10">Lokasi Kami</h2>
        <div className="bg-black h-96 rounded-lg overflow-hidden border border-zinc-800">
          {/* Placeholder for Google Map */}
          <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-gray-400">
            <p className="text-xl">Peta Lokasi Akan Ditampilkan di Sini</p>
          </div>
        </div>
      </Section>
    </>
  );
}
