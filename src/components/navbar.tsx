import React, { useContext, useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import AppContext, { AppContextType } from '@/context/AppContext';
import { FormattedMessage } from 'react-intl';



const Navbar = () => {
    const ctx: AppContextType = useContext(AppContext);
    const [cities, setCities] = useState(ctx.language === "ru" ? [
        {
            value: "tashkent",
            label: "Ташкент"
        },
        {
            value: "tashkent-region",
            label: "Ташкентская область"
        }
    ] : [
        {
            value: "tashkent",
            label: "Tashkent"
        },
        {
            value: "tashkent-region",
            label: "Tashkent viloyati"
        }
    ])
    useEffect(() => {
        setCities(ctx.language === "ru" ? [
            {
                value: "tashkent",
                label: "Ташкент"
            },
            {
                value: "tashkent-region",
                label: "Ташкентская область"
            }
        ] : [
            {
                value: "tashkent",
                label: "Tashkent"
            },
            {
                value: "tashkent-region",
                label: "Tashkent viloyati"
            }
        ])
    }, [ctx])
    return (
        <div className='container mb-5 mt-2'>
            <div className='flex justify-between mb-4'>
                <Select defaultValue='tashkent'>
                    <SelectTrigger className="w-[180px] border-none focus:ring-transparent bg-transparent">
                        <SelectValue placeholder="Select a City" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {cities.map((city: { value: string, label: string }) => (
                                <SelectItem id={city.value} value={city.value} key={city.value}>
                                    <p className='text-[16px] font-medium flex'>
                                        <img className='mr-2' width={"25px"} height={"18px"} src="/map-marker.svg" alt="location" />
                                        {city.label}
                                    </p>
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select onValueChange={(e) => ctx.changeLanguage({ language: e })} defaultValue='ru'>
                    <SelectTrigger className="w-[180px] border-none focus:ring-transparent bg-transparent">
                        <SelectValue placeholder="Select a Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel><FormattedMessage id="language" /></SelectLabel>
                            <SelectItem value="uz">
                                <p className='text-[16px] font-medium flex'>
                                    <img className='mr-2' width={"25px"} height={"18px"} src="/uz.svg" alt="uz" />
                                    <span className='opacity-65 mr-1'>
                                        Til:
                                    </span> Uzbekcha
                                </p>
                            </SelectItem>
                            <SelectItem value="ru">
                                <p className='text-[16px] font-medium flex'>
                                    <img className='mr-2' width={"25px"} height={"18px"} src="/ru.svg" alt="ru" />
                                    <span className='opacity-65'>
                                        Язык:
                                    </span> Русский
                                </p>
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

            </div>
            <div className='flex justify-between gap-4'>
                <div className='p-5 pr-14 bg-white flex rounded-2xl gap-5'>
                    <img src="/logo.svg" alt="logo" />
                    <p className='text-[#747474] text-[14px] w-[103px]'>
                        <FormattedMessage id="navbar.consultation" />
                    </p>
                </div>
                <div className='flex cursor-pointer items-center rounded-2xl gap-3 p-5 px-14 bg-[#0129E3]  hover:opacity-80'>
                    <img className='w-[16px] h-[16px]' src="/apps.svg" alt="apps" />
                    <p className='text-white font-medium'>
                        <FormattedMessage id="navbar.catalog" />
                    </p>
                </div>
                <div className='p-5 px-10 flex items-center bg-white rounded-2xl'>
                    <ul className='flex items-center justify-center gap-6 bg-white'>
                        <li className='text-[#747474] font-medium border-b border-transparent hover:border-black hover:text-black'>
                            <a href="#"><FormattedMessage id="navbar.aboutProject" /></a>
                        </li>
                        <li className='text-[#747474] font-medium border-b border-transparent hover:border-black hover:text-black'>
                            <a href="#"><FormattedMessage id="navbar.partnership" /></a>
                        </li>
                        <li className='text-[#747474] font-medium border-b border-transparent hover:border-black hover:text-black'>
                            <a href="#"><FormattedMessage id="navbar.contacts" /></a>
                        </li>
                    </ul>
                </div>
                <div className='flex cursor-pointer items-center rounded-2xl gap-3 p-5 bg-white hover:bg-slate-100'>
                    <p className='text-[#0129E3] font-medium'><FormattedMessage id="navbar.enter" /></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar