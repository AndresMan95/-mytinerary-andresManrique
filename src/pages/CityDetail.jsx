import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItinerariesByCity } from '../redux/slices/itinerariesSlice';
import { useParams } from 'react-router-dom';

const CityDetail = () => {
  const { cityId } = useParams();
  const dispatch = useDispatch();
  const itineraries = useSelector((state) => state.itineraries.data);
  const status = useSelector((state) => state.itineraries.status);

  useEffect(() => {
    if (cityId) {
      dispatch(fetchItinerariesByCity(cityId));
    }
  }, [dispatch, cityId]);

  if (status === 'loading') return <p className="text-center">Loading...</p>;
  if (status === 'failed') return <p className="text-center text-red-500">Error loading itineraries.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Itineraries for City {cityId}
      </h2>
      {status === 'succeeded' && itineraries.length > 0 ? (
        itineraries.map((itinerary) => (
          <div key={itinerary._id} className="bg-white rounded-lg shadow-md p-4 mb-6 flex items-center">
            <img src={itinerary.photo} alt={itinerary.author} className="w-16 h-16 rounded-full mr-4 object-cover" />
            <div>
              <h3 className="text-lg font-bold">{itinerary.author}</h3>
              <p className="text-sm text-gray-500">Price: {'💵'.repeat(itinerary.price)}</p>
              <p className="text-sm text-gray-500">Duration: {itinerary.duration} hours</p>
              <p className="text-sm text-gray-500">Likes: {itinerary.likes}</p>
              <p className="text-sm text-gray-500">{itinerary.hashtags.map((tag) => `#${tag}`).join(' ')}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No itineraries yet for this city.</p>
      )}
    </div>
  );
};

export default CityDetail;
