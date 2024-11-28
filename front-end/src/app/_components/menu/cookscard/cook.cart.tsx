export const Cookscard = ({
  name,
  focus,
  setFocus,
}: {
  name: string;
  focus: string;
  setFocus: (value: string) => void;
}) => {
  return (
    <button
      className={`flex justify-center items-center w-full border-2 rounded-xl p-3 font-semibold ${focus === name ? "bg-green-500" : ""}`}
      onClick={() => {
        setFocus(name);
      }}
    >
      {name}
    </button>
  );
};
