import Image from 'next/image';

interface ProjectImageProps {
  src: string;
  alt: string;
  objectFit: 'cover' | 'contain';
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, objectFit }) => {
  // Check if the image is a GIF
  const isGif = src.endsWith('.gif');

  return (
    <div className="relative w-full h-96 mb-6">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-${objectFit} rounded-lg`}
        unoptimized={isGif}
      />
    </div>
  );
};

export default ProjectImage;
