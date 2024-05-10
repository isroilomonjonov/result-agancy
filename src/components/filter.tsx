import React from 'react'
import { Button } from './ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Checkbox } from "@/components/ui/checkbox"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const items = [
    {
        id: "Аллерголог",
        label: "Аллерголог",
    },
    {
        id: "Андролог",
        label: "Андролог",
    },
    {
        id: "Венеролог",
        label: "Венеролог",
    },
    {
        id: "ВрачУЗИ",
        label: "Врач УЗИ",
    },
    {
        id: "Гастроэтеролог",
        label: "Гастроэтеролог",
    },
    {
        id: "Гематолог",
        label: "Гематолог",
    },
    {
        id: "Генетик",
        label: "Генетик",
    },
    {
        id: "Гинеколог",
        label: "Гинеколог",
    },
    {
        id: "Дерматолог",
        label: "Дерматолог",
    },
    {
        id: "Инфекционист",
        label: "Инфекционист",
    },
    {
        id: "Кардиолог",
        label: "Кардиолог",
    },
    {
        id: "ЛОР",
        label: "ЛОР",
    },
    {
        id: "Маммолог",
        label: "Маммолог",
    },
    {
        id: "Нарколог",
        label: "Нарколог",
    },

] as const

const FormSchema = z.object({
    items: z.array(z.string()).refine((value: string[]) => value.some((item: string) => item), {
        message: "You have to select at least one item.",
    }),
})
const Filter = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            items: ["ВрачУЗИ"],
        },
    })
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }
    return (
        <div className='py-8 px-6 bg-white rounded-3xl'>
            <div className='flex items-end gap-9 mb-6'>
                <p className='text-xl font-medium max-w-[200px]'>Фильтрация <br /> по направлениям</p>
                <div onClick={() => form.reset({ items: [''] })} className='text-[#DE303A] flex items-center gap-2 cursor-pointer hover:opacity-80'>
                    <img width={"9px"} height={"9px"} src="/x.svg" alt="x" />
                    <p className='font-medium'>Сбросить</p>
                </div>
            </div>
            <div className='relative bg-[#F8F8F8] pr-7 rounded-xl'>
                <Button variant={'ghost'} className='absolute right-0 top-1/2 -translate-y-1/2 mr-1'><img width={"14px"} height={"14px"} src="/search.svg" alt="search" /></Button>
                <input type="search" placeholder="Поиск направления" className='p-4 px-5 bg-transparent w-full border-none outline-none' />
            </div>
            <div className='mt-6'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="items"
                            render={() => (
                                <FormItem>
                                    {items.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="items"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item.id}
                                                        className="flex flex-row items-center space-x-3 space-y-0"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                className='border-[#747474] rounded-md'

                                                                checked={field.value?.includes(item.id)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, item.id])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                                (value) => value !== item.id
                                                                            )
                                                                        )
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="flex w-72 justify-between gap-12">
                                                            <p className='text-[#050B2B]'>{item.label}</p>
                                                            <p className={`font-medium  ${field.value?.includes(item.id) ? 'text-[#0129E3]' : 'text-[#747474]'}`}>(12 312)</p>
                                                        </FormLabel>
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    ))}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </div>
        </div >
    )
}

export default Filter