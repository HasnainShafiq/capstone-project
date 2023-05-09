
// destructure and spread all props values. 
export const FormInput = ({ ...formInput }) => {

  return (
      <input
        className="font-body font-bold text-sm p-2 rounded-sm text-neutral-950 bg-neutral-300 focus:outline outline-2 outline-offset-1 outline-indigo-700"
        {...formInput}
      />
  );
};
