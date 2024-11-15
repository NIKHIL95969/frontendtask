
export default function PageWrapper({ children }) {
  return (
    <div className="flex flex-col pt-2 px-12 space-y-2 flex-grow pb-4">
      {children}
    </div>
  );
}