function Navlink({ icon, url, text }) {
  return (
    <a href={url}>
      <div className="flex flex-row text-[--text] text-xl font-inter font-semibold gap-2 px-2">
        <img src={icon} />
        <div>{text}</div>
      </div>
    </a>
  );
}

export default Navlink;
