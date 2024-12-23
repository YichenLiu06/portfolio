function Navlink({ icon, url, text, handleClick}) {
  return (
    <button onClick={handleClick}>
      <div className="flex flex-row text-[--text] text-3xl font-inter font-semibold gap-2 p-4">
        <img src={icon} />
        <div>{text}</div>
      </div>
    </button>
  );
}

export default Navlink;
