import React, { useState } from "react";
import umaImage from "../images/uma.jpg";
import INC_symbol from "../images/INC_symbol.png";
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
  const [pressedButtons, setPressedButtons] = useState([]); // Track pressed buttons

  const incrementVotes = () => {
    setVotes((prevVotes) => prevVotes + 1);
    console.log("Something just happened");
  };

  const handleButtonClick = (id) => {
    if (!pressedButtons.includes(id)) {
      setPressedButtons((prev) => [...prev, id]);
      incrementVotes();
      console.log("You won't get anything here");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2">
      {/* Top Header */}
      <div className="bg-linear-to-r 
                from-orange-600 
                via-white 
                to-green-600 text-blue rounded-md p-4">
        <h1 className="text-lg font-semibold text-blue-900">
          कोल्हापूर महानगरपालिका सार्वत्रिक निवडणूक २०२५–२६
        </h1>
        <p className="text-sm mt-1  text-blue-900 ">१ विभाग • ७ उमेदवार</p>
      </div>

      {/* Notice Bar */}
     <div className="text-center mt-2 p-2 rounded-md font-medium  text-blue-900
                bg-linear-to-r 
                from-orange-500 
                via-white 
                to-green-500">
  १५ जानेवारी, २०२६ रोजी ७:३० AM पासून सुरू
</div>


      {/* Table Card */}
      <div className="bg-white rounded-xl shadow mt-4 border">
        <div className="bg-blue-500 text-white text-center py-3 rounded-t-xl font-semibold">
          नगरसेवक - प्रभाग ७ ब (सर्वसाधारण महिला )
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 bg-blue-50 border-b text-sm font-semibold text-gray-700">
          <div className="col-span-1 p-3 text-center">क्र.</div>
          <div className="col-span-4 p-3">उमेदवाराचे नाव</div>
          <div className="col-span-3 p-3 text-center">उमेदवार फोटो</div>
          <div className="col-span-2 p-3 text-center">चिन्ह</div>
          <div className="col-span-2 p-3 text-center">मत</div>
        </div>

        {/* Table Rows */}
        {candidates.map((c) => (
          <div
            key={c.id}
            className={`grid grid-cols-12 border-b items-center text-sm ${c.name ? 'bg-pink-300' : ''}`}
          >
            <div className="col-span-1 p-4 text-center">{c.id}</div>

            <div className="col-span-4 p-4">
              {c.name && (
                <>
                  <p className="font-bold text-lg">{c.name}</p>
                  <p className="text-medium text-gray-800">{c.party}</p>
                </>
              )}
            </div>

            <div className="col-span-3 p-4 flex justify-center">
              {c.photo && (
                <img
                  src={c.photo}
                  alt="candidate"
                  className="w-21 h-21 rounded-md border"
                />
              )}
            </div>

            <div className="col-span-2 p-4 flex justify-center">
              {c.symbol && (
                <img
                  src={c.symbol}
                  alt="symbol"
                  className="w-20 h-20 border rounded-md"
                />
              )}
            </div>
            
             

            <div className="col-span-2 p-4 flex justify-center">
              {c.selected ? (
                <button
                  onClick={() => handleButtonClick(c.id)}
                  disabled={pressedButtons.includes(c.id)}
                  className={`px-4 py-2 rounded-md shadow flex items-center gap-2 text-white
    ${pressedButtons.includes(c.id) ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
                >
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  {pressedButtons.includes(c.id) ? "मत दिले" : "बटन दाबा"}
                </button>
              ) : (
                <button className="w-10 h-10 bg-blue-300 rounded-md shadow"></button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r 
                from-orange-500 
                via-white 
                to-green-500 text-white rounded-md mt-4 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-400 rounded-full"></span>
          थेट मतदान
        </div>

        <div className="text-lg font-semibold">
          एकूण मते: <span className="ml-2 bg-blue-700 px-3 py-1 rounded">{votes}</span>
        </div>

      </div>
    </div>
  );
}
