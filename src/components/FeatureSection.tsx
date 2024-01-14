import React from 'react';

interface FeatureSectionProps {
  imagePath: string;
  title: string;
  description: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  imagePath,
  title,
  description,
}) => (
  <div className="bg-white p-4 rounded-md shadow-md mb-8">
    <img
      src={imagePath}
      alt={title}
      width={400}
      height={400}
      className="mb-4 mx-auto"
    />
    <div className="text-xl font-semibold mb-2">{title}</div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureSection;
