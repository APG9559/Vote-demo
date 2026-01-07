import { X } from "lucide-react"; // optional icon lib
import candidateImg from "../images/uma.jpg" // replace
import symbolImg from "../images/INC_symbol.png"; // replace

export default function VoteConfirmationModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Modal */}
      <div className="w-[90%] max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="relative bg-blue-600 text-white px-4 py-3 text-center font-semibold">
          कोल्हापूर महानगरपालिका सार्वत्रिक निवडणूक २०२५–२६
          <button
            onClick={onClose}
            className="absolute right-3 top-2 text-white hover:opacity-80"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 text-center">
          <p className="text-gray-600 text-sm mb-4">
            मी उमेदवारास मतदान केले:
          </p>

          {/* Candidate Card */}
          <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3 shadow-sm">
            
            {/* Photo */}
            <img
              src={candidateImg}
              alt="candidate"
              className="w-16 h-16 rounded-full border"
            />

            {/* Info */}
            <div className="flex-1 text-left">
              <span className="inline-block mb-1 px-3 py-0.5 text-xs rounded-full bg-purple-100 text-purple-700">
                नगरसेवक - प्रभाग ७ 
              </span>
              <h3 className="font-bold text-lg text-gray-800">
                सौ. उमा शिवानंद बनछोडे
              </h3>
              <p className="text-sm text-gray-600">भारतीय राष्ट्रीय कॉंग्रेस</p>
              <p className="text-sm text-blue-600 font-medium">क्र. २ </p>
            </div>

            {/* Symbol */}
            <img
              src={symbolImg}
              alt="symbol"
              className="w-12 h-12 bg-white p-2 rounded-lg border"
            />
          </div>

          {/* Share Button */}
          {/* <button className="mt-6 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="whatsapp"
              className="w-5 h-5"
            />
            शेअर करा
          </button> */}
        </div>
      </div>
    </div>
  );
}
