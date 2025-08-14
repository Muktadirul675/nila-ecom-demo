'use client';
import Image from "next/image";
import { BiCart, BiSearch } from "react-icons/bi";
import { useLanguageStore } from "../stores/language";
import { useText } from "../utils/language";

export default function Navbar() {
    const language = useLanguageStore()

    return <div className="shadow-lg">
        <div className="flex flex-row items-center p-3 md:mx-auto w-full md:w-4/5">
            <Image width={112} height={56} src="https://fabrilife.com/img/fabrilife.svg" alt="Logp" className="h-16" />
            <div className="ms-auto hidden md:block w-[500px]">
                <div className="border border-gray-300 rounded flex px-2 py-1 items-center justify-between gap-2">
                    <input placeholder={useText('Search In English', 'à¦¸à¦¾à¦°à') as string} type="text" className="border-0 w-full outline-none" />
                    <BiSearch className="text-2xl text-slate-500" />
                </div>
            </div>
            <div className="ms-auto flex items-center gap-3">
                <BiCart className="text-3xl" />
                <div className={`p-1 px-1.5 rounded transition-all ${language.isActive('bn') && 'bg-slate-300'}`}>
                    <Image width={30} height={30} onClick={() => language.setLanguage('bn')} src="/bn.png" alt="" className="w-[30px] h-[30px] cursor-pointer" />
                </div>
                <div className={`p-1 px-1.5 rounded transition-all ${language.isActive('en') && 'bg-slate-300'}`}>
                    <Image width={30} height={30} onClick={() => language.setLanguage('en')} src="/en.png" alt="" className="w-[30px] h-[30px] cursor-pointer" />
                </div>
            </div>
        </div>
    </div>
}