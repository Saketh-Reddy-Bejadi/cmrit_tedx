import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TICKETDATA, Ticket } from "../../data/TicketData.ts";
import ticketImg from "/images/ticket.jpg";

const TicketVerifier: React.FC = () => {
  const [search, setSearch] = useState("");
  const [tickets, setTickets] = useState<Ticket[]>(TICKETDATA);
  const [foundTicket, setFoundTicket] = useState<Ticket | null>(null);
  const [verified, setVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = () => {
    const found = tickets.find(
      t => t.phone === search.trim() || t.uniqueID === search.trim()
    );
        if (!found) {
      setFoundTicket(null);
      setVerified(false);
      setErrorMsg("❌ No ticket found for this number");
      return;
    }

    if (found.entered) {
      setFoundTicket(null);
      setVerified(false);
      setErrorMsg("⚠️ Ticket already used for entry");
      return;
    }

    setFoundTicket(found);
    setVerified(false);
    setErrorMsg("");
  };

  const handleVerify = () => {
    if (!foundTicket) return;
  
    const updatedTickets = tickets.map((t) =>
      t.phone === foundTicket.phone ? { ...t, entered: true } : t
    );
  
    setTickets(updatedTickets);
    setVerified(true);
    setFoundTicket({ ...foundTicket, entered: true });
  
    setTimeout(() => {
      setSearch("");
      setFoundTicket(null);
      setVerified(false);
      setErrorMsg("");
    }, 1500);
  };
  
  const reset = () => {
    setSearch("");
    setFoundTicket(null);
    setVerified(false);
    setErrorMsg("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">🎟️ Ticket Verifier</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter ID or number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 w-7/10 py-2 border border-gray-300 rounded-md shadow-sm"
        />
        {!foundTicket ? (
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        ) : (
          <button
            onClick={handleVerify}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            disabled={verified}
          >
            {verified ? "Verified ✅" : "Verify"}
          </button>
        )}
        {foundTicket && (
          <button
            onClick={reset}
            className="px-4 py-2 rounded-md text-gray-800 hover:bg-gray-400 transition bg-gray-300"
          >
            Reset
          </button>
        )}
      </div>

      <AnimatePresence>
        {foundTicket && !verified && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-white rounded-lg shadow-md p-6 xl:w-10/12 text-center"
          >
            <div className="flex justify-center relative">
              <p className="absolute rotate-270 xl:top-20 xl:right-58 xl:text-lg text-[6px] right-[59px] top-9">
                {" "}
                {foundTicket.uniqueID}
              </p>
              <img className="xl:w-10/12" src={ticketImg} alt="Ticket Img" />
            </div>
            <h2 className="text-lg font-semibold text-blue-700 mb-2">
              Ticket Found
            </h2>
            <p>
              <strong>Name:</strong> {foundTicket.name}
            </p>
            <p>
              <strong>Email:</strong> {foundTicket.email}
            </p>
            <p>
              <strong>Phone:</strong> {foundTicket.phone}
            </p>
            <p>
              <strong>Unique ID:</strong> {foundTicket.uniqueID}
            </p>
          </motion.div>
        )}

        {verified && foundTicket && (
          <motion.div
            key="verified"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-green-100 text-green-800 rounded-lg shadow-md p-6 w-80 text-center"
          >
            <h2 className="text-lg font-semibold mb-2">✅ Entry Verified</h2>
            <p>
              <strong>{foundTicket.name}</strong> is now marked as entered.
            </p>
          </motion.div>
        )}

        {errorMsg && (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-red-100 text-red-700 p-4 rounded-md shadow-sm mt-4"
          >
            {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TicketVerifier;
