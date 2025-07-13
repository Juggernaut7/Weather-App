import Button from '../common/Button';

const RecentSearches = ({ searches, onSearch }) => {
  if (!searches.length) return null;

  return (
    <div className="mb-6">
      <h3 className="text-gray-100 text-sm mb-2">Recent Searches</h3>
      <div className="flex flex-wrap gap-2">
        {searches.map((city, index) => (
          <Button
            key={index}
            onClick={() => onSearch(city)}
            className="bg-gray-100/20 text-white text-sm py-1 px-3"
          >
            {city}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;