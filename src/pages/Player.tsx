import React from 'react'
import { MessageCircle, ChevronDown } from 'lucide-react'
import ReactPlayer from "react-player"
import Header from '../components/Header'
import Video from '../components/Video'
import Module from '../components/Module'
import { useAppSelector } from '../store'
export default function Player() {

  const modulo = useAppSelector(state => state.player.curso.modules)
  //satae seria o store
  //palyer seria la o reducer aonde tem o slice
  //e o curso o valor do inital sate do slice
  //e ai pegando o valor  direto no caso do modules

  //pq o selector e bom ele so vai atualizar o componente caso aconteça alteração no dado especific que vc ta pegando no caso ali o "modules"


  //ja na context api o componente ele muda caso o valor do contexto no geral mudar tmb




  return (
    <div className='h-screen  bg-zinc-950 text-zinc-50 flex justify-center items-center'>
      <div className='flex w-[1100px] flex-col gap-6 '>
        <div className='flex items-center justify-between '>
          {/* header */}
          <Header />
          <button className='flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600'>
            <MessageCircle className='h-4 w-4' />
            deixar feed back </button>
        </div>


        <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80'>

          <div className='flex-1 '>
            <Video />
          </div>
          <aside className='w-80 absolute top-0 bottom-0 right-0 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900 '>
           {modulo.map((modulo,index)=>{
            return (
              <Module key={modulo.id} moduleIndex={index} title={modulo.title} amountOfLessons={modulo.lessons.length}/>
            )
           })}
         
      
          </aside>
        </main>


      </div>
    </div>
  )
}
