export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader"></div>

      <style jsx>{`
        .loader {
          width: 50px;
          height: 50px;
          border: 5px solid #e5e7eb;
          border-top: 5px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}