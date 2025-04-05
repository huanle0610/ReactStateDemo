import { useAtomValue } from 'jotai';
import atoms from '../../atoms/appleAtoms';

function TotalPrice() {
  console.log('TotalPrice rendered');
  const totalPrice = useAtomValue(atoms.totalPriceAtom);

  return (
    <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
      <div className="flex justify-between items-center">
        <span className="text-xl font-semibold text-gray-800">
          Total Price:
        </span>
        <span className="text-2xl font-bold text-indigo-600">
          ${totalPrice.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default TotalPrice;
