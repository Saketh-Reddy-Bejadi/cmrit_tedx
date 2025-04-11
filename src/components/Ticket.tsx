import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ticketImg from "/images/ticket.jpg";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";

interface Ticket {
  name: string;
  email: string;
  phone: string;
  uniqueID: string;
  entered: boolean;
  id: string;
}

const TicketVerifier: React.FC = () => {
  const [search, setSearch] = useState("");
  const [foundTicket, setFoundTicket] = useState<Ticket | null>(null);
  const [verified, setVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [verifiedCount, setVerifiedCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const querySnapshot = await getDocs(collection(db, "tickets"));
      const total = querySnapshot.size;
      const verified = querySnapshot.docs.filter(
        (doc) => doc.data().entered
      ).length;

      setTotalCount(total);
      setVerifiedCount(verified);
    };

    fetchCounts();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = async () => {
    const trimmed = search.trim();

    const q = query(collection(db, "tickets"), where("phone", "==", trimmed));
    const alt = query(
      collection(db, "tickets"),
      where("uniqueID", "==", trimmed)
    );

    const querySnapshot = await getDocs(q);
    const altSnapshot = await getDocs(alt);

    const docs = querySnapshot.docs.length
      ? querySnapshot.docs
      : altSnapshot.docs;

    if (docs.length === 0) {
      setFoundTicket(null);
      setErrorMsg("❌ No ticket found");
      return;
    }

    const data = { ...docs[0].data(), id: docs[0].id } as Ticket;

    if (data.entered) {
      setFoundTicket(null);
      setErrorMsg("⚠️ Ticket already used for entry");
      return;
    }

    setFoundTicket(data);
    setErrorMsg("");
  };

  const handleVerify = async () => {
    if (!foundTicket) return;

    const ticketRef = doc(db, "tickets", foundTicket.id);

    await updateDoc(ticketRef, {
      entered: true,
    });
    setVerifiedCount((prev) => prev + 1);
    setVerified(true);
    setFoundTicket({ ...foundTicket, entered: true });

    setTimeout(() => {
      reset();
    }, 4000);
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
      <div className="text-center mb-4">
        <p className="text-gray-700">🎫 Total Tickets: {totalCount}</p>
        <p className="text-green-700">✅ Verified Entries: {verifiedCount}</p>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap justify-center">
        <input
          type="text"
          placeholder="Enter ID or number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 w-72 py-2 border border-gray-300 rounded-md shadow-sm"
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
            className="text-white rounded-lg shadow-md p-6 w-full max-w-2xl text-center"
          >
            <div className="flex justify-center relative">
              <p className="absolute -rotate-90 text-[7px] xl:right-28.5 xl:top-12 right-14 top-8 md:text-sm md:right-27.5 md:top-11 ">
                {foundTicket.uniqueID}
              </p>
              <img className="w-full max-w-xl" src={ticketImg} alt="Ticket" />
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
