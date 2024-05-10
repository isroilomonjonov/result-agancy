import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const PaginationComponent = () => {
    return (
        <Pagination>
            <PaginationContent className=''>
                <PaginationItem>
                    <PaginationPrevious className='bg-[#0129E3] text-white flex items-center justify-center p-5 py-6 rounded-xl border border-transparent hover:bg-white hover:border hover:border-[#0129E3]' href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className='text-black flex items-center justify-center p-6 rounded-xl border border-[#0129E3]' href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className='text-black flex items-center justify-center p-6 rounded-xl bg-white' href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className='text-black flex items-center justify-center p-6 rounded-xl bg-white' href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className='text-black flex items-center justify-center p-6 rounded-xl bg-white' href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis className=' p-4 rounded-xl bg-white' />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext className='bg-[#0129E3] text-white flex items-center justify-center p-5 py-6 rounded-xl border border-transparent hover:bg-white hover:border hover:border-[#0129E3]' href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}

export default PaginationComponent