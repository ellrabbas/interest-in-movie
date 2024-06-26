export const Message = ({ label, placeholder, name, register }) => {
    return (
        <div className="flex gap-4 items-start text-sm text-text w-full mb-1">
            <label className="font-semibold pt-2">{label}</label>
            <textarea
                className="w-full h-40 pt-2 px-3 resize-none scrollbar-hide shadow-md placeholder:text-text border rounded bg-dryGray"
                placeholder={placeholder}
                {...register}
                name={name}
            ></textarea>
        </div>
    );
};

export const Select = ({ label, options, margin, register, name }) => {
    return (
        <div className="flex gap-4 mb-1">
            <label className={`${margin} self-center font-semibold text-text`}>
                {label}
            </label>
            <select
                className="bg-dryGray p-3 scrollbar-hide outline-none rounded-md shadow-md text-text"
                {...register}
                name={name}
            >
                {options.map((option, i) => (
                    <option key={i} value={option.value}>
                        {option.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export const Input = ({ label, type, bg, register, name, value, onChange }) => {
    return (
        <div className="text-sm w-full mb-1">
            <label className="font-lighter align-middle text-text text-sm md:text-lg">
                {label}
            </label>
            <input
                name={name}
                value={value}
                onChange={onChange}
                {...register}
                type={type}
                className={`w-full text-sm text-text py-2 font-semibold border border-t-0 border-x-0 border-b-subMain ${bg ? "bg-main" : "bg-slate-500"
                    }`}
            />
        </div>
    );
};
