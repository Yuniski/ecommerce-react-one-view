export default ({text}) => {
  return (
    <a href="#" className="group py-8 relative">
      <span className="group-hover:text-orange-primary">{text}</span>
      <span className="absolute bottom-0 block w-full h-1 scale-x-0 group-hover:bg-orange-primary mt-5 group-hover:scale-x-100 transition-all duration-500"></span>
    </a>
  )
};
