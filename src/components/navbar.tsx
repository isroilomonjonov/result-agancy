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
        <div>
            <div className='container flex justify-between'>
                <Select defaultValue='tashkent'>
                    <SelectTrigger className="w-[180px] border-none focus:ring-transparent">
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
                    <SelectTrigger className="w-[180px] border-none focus:ring-transparent">
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
        </div>
    )
}

export default Navbar