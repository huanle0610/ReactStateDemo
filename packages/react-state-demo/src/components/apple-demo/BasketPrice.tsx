import { useAtom } from 'jotai';
import atoms from '../../atoms/appleAtoms';

function BasketPrice() {
  console.log('BasketPrice rendered');
  const [basketPrice, setBasketPrice] = useAtom(atoms.basketPriceAtom);

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Basket</h2>
      <div className="flex items-center">
        <label className="w-32 text-gray-700">Basket price:</label>
        <div className="flex-1 relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
            $
          </span>
          <input
            type="number"
            min="0"
            step="0.01"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pl-8 pr-4 py-2"
            value={basketPrice}
            onChange={(e) => setBasketPrice(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

export default BasketPrice;
