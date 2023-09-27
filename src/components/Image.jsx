const Image = ({ data }) => {
  return (
    <div className="mt-4">
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img
          src={data.urls.small}
          alt={data.alt_description}
          className=" hover:scale-105 duration-300 h-72  w-full object-cover rounded-lg shadow-md"
        />
      </a>
    </div>
  );
};

export default Image;
