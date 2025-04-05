import { useAtom } from 'jotai';
import atoms from '../../atoms/appleAtoms';

function AppleSection() {
  console.log('AppleSection rendered');
  const [appleCount, setAppleCount] = useAtom(atoms.appleCountAtom);
  const [applePrice, setApplePrice] = useAtom(atoms.applePriceAtom);

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Apples</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <label className="w-32 text-gray-700">Count:</label>
          <input
            type="number"
            min="0"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2"
            value={appleCount}
            onChange={(e) => setAppleCount(Number(e.target.value))}
          />
        </div>
        <div className="flex items-center">
          <label className="w-32 text-gray-700">Price per apple:</label>
          <div className="flex-1 relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              $
            </span>
            <input
              type="number"
              min="0"
              step="0.01"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pl-8 pr-4 py-2"
              value={applePrice}
              onChange={(e) => setApplePrice(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppleSection;
