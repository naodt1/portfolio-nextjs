export default function Title({ text, className, isButton }: { text: string, className?: string, isButton: boolean }) {
    return (
      <div className={`${className} ${isButton ? 'inline-block px-6 py-3 border-2 border-green-500 text-white rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition-all' : ''}`}>
        <h1 className={`text-3xl font-bold ${isButton ? '' : 'group-hover:text-green-400'} transition-all relative`}>{text}</h1>
        {!isButton && (
          <>
            <div className="w-40 h-2 bg-green-500 rounded-full"></div>
            <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
          </>
        )}
      </div>
    );
  }
  