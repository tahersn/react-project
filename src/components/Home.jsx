const Home = () => {
  const tab = [
    { nom: "taher", age: 21, passion: "dev" },
    { nom: "yessine", age: 21, passion: "web" },
  ];

  return (
    <div className="flex h-full items-center justify-center text-xl flex-col gap-5">
      {tab.map((item) => {
        return (
          <h1 className="text-red-500 font-extrabold" key={item.nom}>
            Passion:{item.passion}
          </h1>
        );
      })}
    </div>
  );
};

export default Home;
