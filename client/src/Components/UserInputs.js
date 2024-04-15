export const Message = ({ label, placeholder }) => {
    return (
        <div className="flex gap-4 items-start text-sm text-text w-full">
            <label className="font-semibold pt-2">{label}</label>
            <textarea
                className="w-full h-40 pt-2 px-3 resize-none scrollbar-hide shadow-md placeholder:text-text border rounded bg-dryGray"
                placeholder={placeholder}
            ></textarea>
        </div>
    )
};

export const Select = ({ label, options, onChange }) => {
    return (
        <div className="flex gap-4">
            <label className="mr-5 self-center font-semibold text-text">{label}</label>
            <select className="bg-dryGray p-3 outline-none rounded-md shadow-md text-text" onChange={onChange}>
                {options.map((option, i) => (
                    <option key={i} value={option.value}>{option.title}</option>
                ))}
            </select>
        </div>
    )
};

export const Input = ({ label, type, bg }) => {
    return (
        <div className="text-sm w-full">
            <label className="font-lighter align-middle text-text text-sm md:text-lg">{label}</label>
            <input
                required
                type={type}
                className={`w-full text-sm text-text py-2 font-semibold border border-t-0 border-x-0 border-b-subMain ${bg ? 'bg-main' : 'bg-slate-500'}`} />
        </div>
    )
};