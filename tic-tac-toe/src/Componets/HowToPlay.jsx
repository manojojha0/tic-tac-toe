import React from 'react';

const patternImages = [
//   {
//     pattern: [1, 2, 3],
//     imgSrc: 'https://images.openai.com/thumbnails/url/oCfYgnicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw5yNszzSIk0SDEM0jUtDPAvzCj3DigqSQ9xKy8JzM1IzDPNSEkNzCzILyt38ykydg30M4zwSnFJdM_KLlcrBgAiByp7',
//   },
  {
    pattern: [1, 5, 9],
    imgSrc: 'https://images.openai.com/thumbnails/url/C6BKmHicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw70iwoxKYxMKnZMS6oMT0vNS4131HUrrQyNSiszi4gIcyxIzM7O8vVOTc32znUu8nIxDclKNM8pCY9QKwYA5sIqIg',
  },
  {
    pattern: [3, 5, 7],
    imgSrc: 'https://images.openai.com/thumbnails/url/nFfc33icu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw42c_S1dEvMSs7wc9a1LHM3rsw19_A1NQ3KSyw0LYhKigjxs_RNN8-vdClOCrG0MDP3cq-qSkoO8ElSKwYAnZkoSg',
    
  },
  {
    pattern: [4, 5, 6],
    imgSrc: 'https://images.openai.com/thumbnails/url/G0eeKnicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw6xjHByzAjOMnT0SU4vTc5PNPH2can08DAzK090CSooDHE2jUpOdfQpq8wO8MquMInIj0x2dg_1yEgvDVQrBgANlCnm',
  },
];

const HowToPlay = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-4 py-10 md:px-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-6 py-10 text-center">How to Play Tic‑Tac‑Toe</h1>
        <p className="text-lg mb-10 text-center">
          Tic‑Tac‑Toe ek 3×3 grid wala game hai jisme X aur O turn by turn bharte hain.
          Aapko 3 same symbols ek line mein laane hain — row, column, ya diagonal mein — jeetne ke liye.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {patternImages.map((item, idx) => (
            <div key={idx} className="text-center">
              <img
                src={item.imgSrc}
                alt={`Win pattern ${item.pattern.join(', ')}`}
                className="w-full h-auto object-contain rounded-md shadow-md border border-gray-300"
              />
              <p className="mt-2 text-sm text-gray-700">
                Win Pattern: <strong>{item.pattern.join(', ')}</strong>
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-700">
          In patterns ko yaad rakho, aur apne moves ko aise plan karo ki X ya O ek line mein aa jaye.
        </p>
      </div>
    </div>
  );
};

export default HowToPlay;
