export function Calculate({ value, operator }) {
  return (
      <div className="flex items-center justify-end w-80 h-20 bg-base-200 text-black text-right rounded-lg shadow-lg mb-5">
          <span className="text-4xl mx-2">
              {operator ? `${value} ${operator}` : value}
          </span>
      </div>
  );
}