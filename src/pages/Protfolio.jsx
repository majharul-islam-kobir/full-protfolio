import  { useState } from 'react';

const portfolioItems = [
  { id: 1, category: 'logo', imageUrl: 'https://via.placeholder.com/150', title: 'Logo 1' },
  { id: 2, category: 'video', imageUrl: 'https://via.placeholder.com/150', title: 'Video 1' },
  { id: 3, category: 'graphic', imageUrl: 'https://via.placeholder.com/150', title: 'Graphic 1' },
  { id: 4, category: 'mockup', imageUrl: 'https://via.placeholder.com/150', title: 'Mockup 1' },
  { id: 5, category: 'logo', imageUrl: 'https://via.placeholder.com/150', title: 'Logo 2' },
  { id: 6, category: 'video', imageUrl: 'https://via.placeholder.com/150', title: 'Video 2' },
  { id: 7, category: 'graphic', imageUrl: 'https://via.placeholder.com/150', title: 'Graphic 2' },
  { id: 8, category: 'mockup', imageUrl: 'https://via.placeholder.com/150', title: 'Mockup 2' },
  { id: 9, category: 'logo', imageUrl: 'https://via.placeholder.com/150', title: 'Logo 3' },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="bg-black py-12 text-white ">
      <div className="container mx-auto text-center w-10/12">
        <h2 className="text-5xl font-bold mb-8 text-white">
          MY <span className="text-yellow-400">PORTFOLIO</span>
        </h2>

        {/* Filter Menu */}
        <div className="flex justify-center space-x-6 mb-8">
          <button
            className={`text-lg ${filter === 'all' ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400`}
            onClick={() => setFilter('all')}
          >
            ALL
          </button>
          <button
            className={`text-lg ${filter === 'logo' ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400`}
            onClick={() => setFilter('logo')}
          >
            LOGO
          </button>
          <button
            className={`text-lg ${filter === 'video' ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400`}
            onClick={() => setFilter('video')}
          >
            VIDEO
          </button>
          <button
            className={`text-lg ${filter === 'graphic' ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400`}
            onClick={() => setFilter('graphic')}
          >
            GRAPHIC DESIGN
          </button>
          <button
            className={`text-lg ${filter === 'mockup' ? 'text-yellow-400' : 'text-white'} hover:text-yellow-400`}
            onClick={() => setFilter('mockup')}
          >
            MOCKUP
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
