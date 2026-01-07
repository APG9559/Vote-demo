import React, { useEffect, useState } from "react";
import axios from "axios";
import umaImage from "../images/uma.jpg";
import INC_symbol from "../images/INC_symbol.png";
import voteSound from "../assets/UmaAudio.mp3";
import VoteConfirmationModal from "./VoteConfirmationModal";

const API_URL = "https://votedemo-backend.onrender.com";
const voteAudio = new Audio(voteSound);

const candidates = [
  { id: 1, name: "" },
  {
    id: 2,
    name: "बनछोडे उमा शिवानंद",
    party: "भारतीय राष्ट्रीय कॉंग्रेस",
    photo: umaImage,
    symbol: INC_symbol,
    selected: true,
  },
  { id: 3, name: "" },
  { id: 4, name: "" },
];

export default function UmaBansode() {
  const [votes, setVotes] = useState(0);
  const [pressedButtons, setPressedButtons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  /* Fetch votes on load */
  useEffect(() => {
    axios
      .get(`${API_URL}/votes`)
      .then((res) => setVotes(res.data.voteCount))
      .catch((err) => console.error(err));
  }, []);

  /* Vote handler */
  const handleButtonClick = (name) => {
    if (pressedButtons.includes(name) || loading) return;

    setLoading(true);
    setPressedButtons((prev) => [...prev, name]);

    axios
      .post(`${API_URL}/vote`, { name })
      .then((res) => {
        setVotes(res.data.voteCount);

        // 🔊 play sound
        voteAudio.currentTime = 0;
        voteAudio.play();

        // ✅ show popup
        setShowModal(true);
      })
      .catch((err) => console.error("Vote error:", err))
      .finally(() => setLoading(false));

    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(400); // Vibrate for 400ms
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-2">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 via-white to-green-600 rounded-md p-4">
          <h1 className="text-lg font-semibold text-blue-900">
            कोल्हापूर महानगरपालिका सार्वत्रिक निवडणूक २०२५–२६
          </h1>
          {/* <p className="text-sm mt-1 text-blue-900">१ विभाग • ७ उमेदवार</p> */}
        </div>

        {/* Notice */}
        <div className="text-center mt-2 p-2 rounded-md font-medium text-blue-900 bg-gradient-to-r from-orange-500 via-white to-green-500">
          १५ जानेवारी, २०२६ रोजी सकाळी ७:३० पासून सुरू
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow mt-4 border">
          <div className="bg-blue-500 text-white text-center py-3 rounded-t-xl font-semibold">
            नगरसेवक - प्रभाग ७ ब (सर्वसाधारण महिला)
          </div>

          {/* Header row */}
          <div className="grid grid-cols-12 bg-blue-50 border-b text-sm font-semibold text-gray-700">
            <div className="col-span-1 p-3 text-center">क्र.</div>
            <div className="col-span-4 p-3">उमेदवाराचे नाव</div>
            <div className="col-span-3 p-3 text-center">उमेदवार फोटो</div>
            <div className="col-span-2 p-3 text-center">चिन्ह</div>
            <div className="col-span-2 p-3 text-center">मत</div>
          </div>

          {/* Rows */}
          {candidates.map((c) => (
            <div
              key={c.id}
              className={`grid grid-cols-12 border-b items-center text-sm ${
                c.selected ? "bg-pink-300" : ""
              }`}
            >
              <div className="col-span-1 p-4 text-center">{c.id}</div>

              <div className="col-span-4 p-4">
                {c.selected && (
                  <>
                    <p className="font-bold text-lg">{c.name}</p>
                    <p className="text-gray-800">{c.party}</p>
                  </>
                )}
              </div>

              <div className="col-span-3 p-4 flex justify-center">
                {c.photo && (
                  <img
                    src={c.photo}
                    alt="candidate"
                    className="w-20 h-20 rounded-md border"
                  />
                )}
              </div>

              <div className="col-span-2 p-4 flex justify-center">
                {c.symbol && (
                  <img
                    src={c.symbol}
                    alt="symbol"
                    className="w-16 h-16 rounded-md border"
                  />
                )}
              </div>

              <div className="col-span-2 p-4 flex justify-center overflow-hidden">
                {c.selected ? (
                  <button
                    onClick={() => handleButtonClick(c.name)}
                    disabled={pressedButtons.includes(c.name) || loading}
                    className={`w-full max-w-[110px]
                      px-2 py-2 rounded-md shadow
                      flex items-center justify-center gap-1
                      text-white text-sm
                      ${
                        pressedButtons.includes(c.name) || loading
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    {pressedButtons.includes(c.name)
                      ? "मत दिले"
                      : "बटन दाबा"}
                  </button>
                ) : (
                  <button className="w-8 h-8 bg-blue-300 rounded-md shadow"></button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-md mt-4 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-blue-900 font-medium">
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            थेट मतदान
          </div>

          <div className="text-lg font-semibold text-blue-900">
            एकूण मते:
            <span className="ml-2 bg-blue-700 text-white px-3 py-1 rounded">
              {votes}
            </span>
          </div>
        </div>
      </div>

      {/* ✅ Vote confirmation popup */}
      {showModal && (
        <VoteConfirmationModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
