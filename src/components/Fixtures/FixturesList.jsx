import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import { events } from "./FixturesData.js";
import FixtureCard from "./FixtureCard.jsx";

function FixturesList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const eventsPerPage = 8;

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  const paginate = (direction) => {
    setCurrentPage((current) =>
      direction === "next"
        ? Math.min(
            current + 1,
            Math.ceil(filteredEvents.length / eventsPerPage)
          )
        : Math.max(current - 1, 1)
    );
  };
  return (
    <div>
      <div className="mb-6">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 text-gray-100 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-full focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-40 backdrop-filter backdrop-blur-lg"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>
      {filteredEvents.length === 0 && (
        <p className="text-gray-400 text-center text-2xl">
          No events found. Try a different search term!
        </p>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {currentEvents.map((event, index) => (
            <FixtureCard
              key={event.id}
              event={event}
              index={index}
              isEven={index % 2 === 0}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex justify-center items-center space-x-4">
        <button
          onClick={() => paginate("prev")}
          disabled={currentPage === 1}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors disabled:opacity-50"
        >
          <FaChevronLeft />
        </button>
        <span className="text-xl font-semibold">{currentPage}</span>

        <button
          onClick={() => paginate("next")}
          disabled={
            currentPage === Math.ceil(filteredEvents.length / eventsPerPage)
          }
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors disabled:opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default FixturesList;
