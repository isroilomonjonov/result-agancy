import React, { useContext } from 'react'
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
    return (
        <div>
            <div className='navbar-top flex justify-between'>
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