export function Logo(props) {
  const { extraClasses } = props; 

  return (
    <div className={`font-serif font-bold text-4xl text-zinc-200 ${extraClasses ?? ""}`}>
      <span>ld</span>
      <span className="text-zinc-500">.</span>
    </div>   
  );
}