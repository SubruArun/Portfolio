import React from 'react';
import { downloadsData } from '../../data/mock';
import { FileText, Award, Download } from 'lucide-react';
import { Button } from '../ui/button';

const DownloadsSection = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'resume':
        return <FileText className="h-8 w-8" />;
      case 'certificate':
        return <Award className="h-8 w-8" />;
      default:
        return <FileText className="h-8 w-8" />;
    }
  };

  const handleDownload = (item) => {
    if (item.type === 'resume') {
      // Download the resume PDF
      const link = document.createElement('a');
      link.href = '/Subramanian_L_CV.pdf';
      link.download = 'Subramanian_L_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // For certificates, show alert
      alert('Please request certificates via contact form');
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3 tracking-wide uppercase text-sm">
            Resources
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Resume & Certificates
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Downloads Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {downloadsData.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-xl p-8 border border-neutral-200 dark:border-neutral-700 text-center hover:shadow-lg transition-all group flex flex-col h-full"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                {getIcon(item.type)}
              </div>

              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 flex-grow">
                {item.description}
              </p>

              <div className="mt-auto">
                <Button
                  onClick={() => handleDownload(item)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            📎 Files will be available for download once uploaded to the system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;