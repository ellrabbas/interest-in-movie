import React, { Fragment, useState } from "react";
import { CategoriesData } from "../Data/CategoriesData";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown, FaCheck } from "react-icons/fa6";

const YearData = [
    { title: "Sort By Year" },
    { title: "1700 -1800" },
    { title: "1800 -1900" },
    { title: "1900 -2000" },
    { title: "2000 -2010" },
    { title: "2010 -2040" },
];

const TimesData = [
    { title: "Sort By Hours" },
    { title: "1 - 5 Hours" },
    { title: "5 - 10 Hours" },
    { title: "10 - 15 Hours" },
    { title: "15 - 20 Hours" },
    { title: "20 - 30 Hours" },
];

const RatesData = [
    { title: "Sort By Rates" },
    { title: "1 Star" },
    { title: "2 Star" },
    { title: "3 Star" },
    { title: "4 Star" },
    { title: "5 Star" },
];

function Filters() {
    const [category, setCategory] = useState({ title: "Category" });
    const [year, setYear] = useState(YearData[0]);
    const [time, setTime] = useState(TimesData[0]);
    const [rate, setRate] = useState(RatesData[0]);

    const Filters = [
        {
            value: category,
            onChange: setCategory,
            items: CategoriesData,
        },
        {
            value: year,
            onChange: setYear,
            items: YearData,
        },
        {
            value: time,
            onChange: setTime,
            items: TimesData,
        },
        {
            value: rate,
            onChange: setRate,
            items: RatesData,
        },
    ];

    return (
        <div className="my-6 text-text grid text-center md:grid-cols-4 grid-cols-2 lg:gap-8 gap-2 rounded-lg p-4">
            {Filters.map((item, index) => (
                <Listbox key={index} value={item.value} onChange={item.onChange}>
                    <div className="relative">
                        <Listbox.Button className="relative border text-text font-semibold bg-dryGray rounded-md shadow-md cursor-default py-3 px-10 text-start text-xs">
                            <span className="block truncate">{item.value.title}</span>
                            <span className=" absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <FaAngleDown className="h-5 w-5" aria-hidden="true" />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute scrollbar-hide z-10 mt-1 w-full border bg-main rounded-md shadow-lg max-h-60 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm text-start">
                                {item.items.map((itm, indx) => (
                                    <Listbox.Option
                                        key={indx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "text-text bg-dryGray" : "text-text"
                                            }`
                                        }
                                        value={itm}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncated ${selected ? "font-semibold" : "font-normal"
                                                        }`}
                                                >
                                                    {itm.title}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <FaCheck className="h-4 w-4" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            ))}
        </div>
    );
}

export default Filters;
