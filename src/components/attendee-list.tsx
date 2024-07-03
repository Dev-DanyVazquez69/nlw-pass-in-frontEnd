import { Search, MoreHorizontal, ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { IconButtom } from './icon-buttom'
import { Table } from '../components/table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { useState } from 'react'
import { Attendees } from '../data/attendees'
import dayjs from 'dayjs'
import  relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'


dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export const AttendeeList = () => {

    const [search, setSearch] = useState<string>('')
    const [indexPage, setIndexPage] = useState<number>(1)
    const totalPages = Math.ceil(Attendees.length /10)

    const goToFirstPage = () => {
        setIndexPage(1)
    }

    const goToNextPage = () => {
        setIndexPage(indexPage + 1)
    }

    const goToPreviusPage = () => {
        setIndexPage(indexPage - 1)
    }

    const goToLastPage = () => {
        setIndexPage(totalPages)
    }

    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">participantes</h1>
                <div className="px-3 h-6 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                    <Search className='size-4 text-emerald-300' />
                    <input value={search} onChange={(e) => {setSearch(e.target.value)}} className='bg-transparent flex-1 outline-none h-6 border-0 text-sm ring-0' placeholder="Escreva aqui" />
                </div>
            </div>
            <Table>
                <thead className='border-b border-white/10 '>
                    <tr>
                        <TableHeader>
                            <input type='checkbox' className='size-4 bg-black/20 rounded border border-white/10'></input>
                        </TableHeader>
                        <TableHeader style={{ width: '48px' }} >Códigos</TableHeader>
                        <TableHeader>Participantes</TableHeader>
                        <TableHeader >data de inscrição</TableHeader>
                        <TableHeader>data do check in</TableHeader>
                        <TableHeader style={{ width: '64px' }}></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {Attendees.slice((indexPage - 1) * 10 , indexPage * 10).map((attendees) => {
                        return (
                            <TableRow key={attendees.id}>
                                <TableCell>
                                    <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                                </TableCell>
                                <TableCell >{attendees.id}</TableCell>
                                <TableCell >
                                    <div className='flex flex-col gap-1'>
                                        <span>{attendees.name}</span>
                                        <span className='font-semibold text-white'>{attendees.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell >{dayjs().to(attendees.createdAt)}</TableCell>
                                <TableCell >{dayjs().to(attendees.createdInAt)}</TableCell>
                                <TableCell >
                                    <IconButtom transparent className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                                        <MoreHorizontal className='size-4' />
                                    </IconButtom>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>
                            mostrando 10 de {Attendees.length}
                        </TableCell>
                        <TableCell colSpan={3} className='text-right'>
                            <div className='inline-flex items-center gap-8'>
                                <span>página {indexPage} de {totalPages}</span>

                                <div className='flex gap-1.5'>
                                    <IconButtom onClick={goToFirstPage} disabled={indexPage === 1}>
                                        <ChevronsLeft className='size-4' />
                                    </IconButtom>
                                    <IconButtom onClick={goToPreviusPage} disabled={indexPage === 1}>
                                        <ChevronLeft className='size-4' />
                                    </IconButtom>
                                    <IconButtom onClick={goToNextPage} disabled={indexPage === totalPages}>
                                        <ChevronRight className='size-4' />
                                    </IconButtom>
                                    <IconButtom onClick={goToLastPage} disabled={indexPage === totalPages}>
                                        <ChevronsRight className='size-4' />
                                    </IconButtom>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div>

    )
}