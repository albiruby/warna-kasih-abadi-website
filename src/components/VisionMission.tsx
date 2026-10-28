import React from 'react';

export const VisionMission: React.FC = () => {
  return (
    <section id="vision-mission" className="py-16 bg-[#FFF7ED] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Bagian */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Visi & Misi Kami
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Komitmen kami dalam memberikan kualitas terbaik dan inovasi tiada henti untuk setiap pelanggan.
          </p>
        </div>

        {/* Kartu Visi dan Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kartu Visi */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Visi
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                "Menjadi perusahaan manufaktur cat di Indonesia yang tidak hanya unggul dalam kualitas produk, tetapi juga menjadi saluran berkat bagi masyarakat, karyawan, dan lingkungan"
              </p>
            </div>
          </div>

          {/* Kartu Misi */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Misi
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <ul className="list-disc pl-5 space-y-4 text-gray-700 dark:text-gray-300 marker:text-orange-500">

  <li>
    Produk Berkualitas Tinggi.
  </li>

  <li>
    Menjaga Integritas.
  </li>

  <li>
    Membangun kemitraan yang saling menguntungkan.
  </li>

  <li>
    Memberdayakan Karyawan.
  </li>

</ul>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;